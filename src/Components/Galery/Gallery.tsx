import React, { useState } from "react";
// import style from "./Galery.module.css";
import { GalleryImage } from "./GalleryImage";
import { GalleryModal } from "./GalleryModal";
import "./Gallery.css";

let imgUrls = [
  "https://scontent.faep14-3.fna.fbcdn.net/v/t39.30808-6/271875616_3029772800629830_6123713048690336497_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEyNBTXsIP5F8EvP1PMNvfzWy7agCSCDwhbLtqAJIIPCC9jpesjX3h7K6Jy_U46jIoLhhrJVWgL7j-BD2VCUNB9&_nc_ohc=h4BqdRI-PbEAX_A4zVP&_nc_ht=scontent.faep14-3.fna&oh=00_AT8epqUFWPME3p_AQQaouN4K7fKZF2kox1vWfiTTDlnaRA&oe=635E7803",
  "https://scontent.faep14-3.fna.fbcdn.net/v/t39.30808-6/271934755_3029773587296418_3561490144716509737_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFiohP6I4zfUHOwlkwHupBCTkt1-uvcJ3dOS3X669wnd8SU_8HsdxCMHAJYS1ArrqJzIYhp422OtoQpf8EyzN_9&_nc_ohc=ISLGDWx_UvUAX-0zvok&_nc_ht=scontent.faep14-3.fna&oh=00_AT_CNclBg-sn6mkDe6FsQvyPI0JfNxur_MdltABWoV4GvQ&oe=635E3132",
  "https://scontent.faep14-3.fna.fbcdn.net/v/t1.6435-9/89597223_2518012008472581_652152764847095808_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeFd58F7Z95UCfOiolwlY4yuwldF3LW9HVDCV0Xctb0dUP8GxQwAvqVZcen6u1207u2Gbeb6ZhHFt8F5u6h0fFjm&_nc_ohc=KwYn2C6OfP0AX8y7hq9&_nc_ht=scontent.faep14-3.fna&oh=00_AT-OVK5Lp7NLIhYyfh9XMQND8VjqDtffvmhMXmPN7kmcAQ&oe=637F8F72",
  "https://scontent.faep14-3.fna.fbcdn.net/v/t1.6435-9/82838886_2481871202086662_7832198414187102208_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeGK-pv0SQPx6Ddms19frQItCGctZWzIYucIZy1lbMhi5x3yNi7CwnZb4-VJqAzDWCNx-T6laKD4_ZXfDqTtu0ug&_nc_ohc=0TeFjG9IftkAX8ZS_O_&_nc_ht=scontent.faep14-3.fna&oh=00_AT9LSNTsAuyTOTfjIGIIfk0F0mpGelnYpXA3XEacQkflzQ&oe=637CDD2B",
  "https://scontent.faep14-2.fna.fbcdn.net/v/t1.6435-9/83090070_2481871155420000_2702689680897343488_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeEoPRmaEW0vbK7fsgR2DWwoxdTYpKEPfDnF1NikoQ98OYsp02tuxm6R8BQNelHGF30PXJS3NHeUFqh-oc_xhryA&_nc_ohc=NwSMEawk4qUAX8Zz_W8&_nc_ht=scontent.faep14-2.fna&oh=00_AT_kH7cEtqoJT5ZeZi4jbVvEiwcwJPqB3QWSrq9bbyTIhw&oe=638081B2",
  "https://scontent.faep14-2.fna.fbcdn.net/v/t1.6435-9/82901518_2481871068753342_4414354106789920768_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeEEQvtkOJGqXQIT_GWojjYSCy4CG9K9X6QLLgIb0r1fpF1yhMky9-QZFyEywfEXkJ9mU3vSS0280-bf8goGRI9I&_nc_ohc=23U6RHxbYp8AX8bWmYE&_nc_ht=scontent.faep14-2.fna&oh=00_AT8tZLYEg7XbMdzV1qj4FRk4CxAKKAmVMIyXbWAmAG2vrw&oe=637E4E31",
  "https://scontent.faep14-3.fna.fbcdn.net/v/t1.6435-9/62529784_2300858573521260_8355671759822782464_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeGvKqtVnp7w7gpiY0WrvTYIXI7GL5ObVqBcjsYvk5tWoH6LD5TTxskDIbr-ObYat8buBocGDErhf0qRhrPJ3gM7&_nc_ohc=IqjlATawAEgAX8SoS5T&_nc_ht=scontent.faep14-3.fna&oh=00_AT-q4gAZlya7yNknNDn6kx4SOB667lpXFhLPf_u8YNW-1Q&oe=637F07A1",
  "https://scontent.faep14-3.fna.fbcdn.net/v/t1.6435-9/61273403_2289858767954574_3923786932265418752_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHgtmDQH2R_cjrG3jFu1zpD5S1Qgdn-BZzlLVCB2f4FnCU6yv9pv8lmql_-8GYofWjyv3Q0zqy7TZccolgNDaGa&_nc_ohc=u7_NEYjmnLkAX9KPEiy&_nc_ht=scontent.faep14-3.fna&oh=00_AT8HUlt-tHmCriQMAW8TdgyHMzJuS4PVxfTHsclqRa_wjA&oe=637E626D",
  "https://scontent.faep14-2.fna.fbcdn.net/v/t1.6435-9/61455204_2289858744621243_6836151195657043968_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHL70ONRZPQBuGjTT0CObe9sY3Hlu4iXTKxjceW7iJdMnjOF-Y9sVJi3qY8-1E4Oogz4h9z6dn7zNcjv1Ja4URd&_nc_ohc=Oy0YsK8JuqEAX-N49qe&_nc_oc=AQlpqZY_LEEaeJblFkgMiEA40uFA0PCXDDzN6yqRk93X7SDZTTakm2vCb-b5s-IBJiM&_nc_ht=scontent.faep14-2.fna&oh=00_AT8Oxx_zoa7NKm56fDmnfzrduWYSCOeVzCfgOL9ompF_0w&oe=637E22DE",
  "https://scontent.faep14-2.fna.fbcdn.net/v/t1.6435-9/61324942_2289858714621246_3822953250617819136_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHgZs4Fd-D9Ur4b2gMEEvdkOAp_ZygXldI4Cn9nKBeV0ongvV_m8pD59a7LpzP_PfY6QUjvU9F4FFWcT1ZHb5X5&_nc_ohc=uBL7_B1xxQ8AX8_Uzn7&_nc_ht=scontent.faep14-2.fna&oh=00_AT8uQYF6lMW8qCcN3LB9r4ObzaQmnbreTIo1nXDl4OBTHw&oe=63804D62",
  "https://scontent.faep14-2.fna.fbcdn.net/v/t1.6435-9/61376187_2289858607954590_1508775986215256064_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEPUH8W3GCH918iivP-A0h2_Sb_G5KR87z9Jv8bkpHzvPixdqdlccAFUmhVbyap-V9x5dqWWVMccfsDcpZT2yph&_nc_ohc=gC8_sgJrkY8AX9zx-zM&_nc_ht=scontent.faep14-2.fna&oh=00_AT827dL_byVVOrKbKlg2OImphVDh-ccAEG0gKJMXTamzeQ&oe=63805E61",
  "https://scontent.faep14-2.fna.fbcdn.net/v/t1.6435-9/61950744_2289858587954592_3246098035633029120_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGmENSy1JKX1Qhe_kijUDHPSDDYeg414sxIMNh6DjXizPIduhsuqHjpmwhhzNCXM2XyctKJO6Th6Puf3m5vBomV&_nc_ohc=3gRcOJgQ2S0AX-AKFlP&tn=-JFiPmrX6MuF-QyW&_nc_ht=scontent.faep14-2.fna&oh=00_AT-UV4hB6mOx_jWP7OkmPQT7I0BNa5pdDFAKO0CfPBlK3A&oe=637F249A",
  "https://scontent.faep14-2.fna.fbcdn.net/v/t1.6435-9/61703728_2289858561287928_401077463578312704_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHOJIoenrbh3N5329DDn1HKKWBlgD_z_dUpYGWAP_P91Xc3C3gceo4LE6MU__VMfOpH9WuZAP6uVRMHxYwnbqwE&_nc_ohc=X4WUoOBLeJUAX_dNCsc&_nc_ht=scontent.faep14-2.fna&oh=00_AT8stI8b-pEyOBNIgt0YLNXB5DBUEHG63jM7uGcHD7vh-g&oe=637D50B0",
  "https://scontent.faep14-3.fna.fbcdn.net/v/t1.6435-9/61516724_2289858494621268_2739730075858501632_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHXkT6YRwTlpjirZvN7vSewcEE49Rz_-yNwQTj1HP_7I96WFRuO8cRCbeC-xqrA9GHZwZNPlQzM_7AvWvOYXDPV&_nc_ohc=EJZfb6LAMzIAX9rn7QA&_nc_ht=scontent.faep14-3.fna&oh=00_AT-F739QB4LsDHHQs9AZjqtLdSJ5YPRahmYChHw54UrYEA&oe=637E87FA",
  "https://scontent.faep14-3.fna.fbcdn.net/v/t1.6435-9/61999486_2289858381287946_3156812825259671552_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFqVnz__I9OU1_wv6ii75cOh2C8a9mFnNWHYLxr2YWc1c2hTDAeSAt-r4MOQ-4n3Tfi58D6f6jIQ5P3FlWGtf_d&_nc_ohc=iRl2_iwvnSYAX-zn-qG&_nc_ht=scontent.faep14-3.fna&oh=00_AT9BSefW9pVi8QgTgFUTMUqCAeXRRPUeOY2T9yCiEKI0oQ&oe=637E81B9",
  "https://scontent.faep14-3.fna.fbcdn.net/v/t1.6435-9/61739561_2289858357954615_4655303683355967488_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFbZ1fXAviuSvoPt28lZiJSoza5mWf_sGujNrmZZ_-wa6Lj1tah_GQ8maYIyiXjtunHPB6e_bfBDIDNRetdBTNn&_nc_ohc=ikU5zj_0_XgAX-RsikF&_nc_ht=scontent.faep14-3.fna&oh=00_AT-2QemHLM6hYudq8PG98wkoaurCuhTvk-48hvtIN_hOTg&oe=637EB311",
  "https://scontent.faep14-2.fna.fbcdn.net/v/t1.6435-9/61706529_2289858281287956_8658387033439338496_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeF2Az7_6Bg5vbiNvnkb35rENGBtSh633GY0YG1KHrfcZtJtm8lpE2ifCIAjepSWaCV5sxLi8nEHU2sRbFdVf50t&_nc_ohc=bfi-WV4dM4AAX93-xr3&_nc_ht=scontent.faep14-2.fna&oh=00_AT-mWQ0ftIU192eVyQUGjsNIqv-k1EivfT3RA2xBvtWUVQ&oe=63809345",
  "https://scontent.faep14-3.fna.fbcdn.net/v/t1.6435-9/61002486_2283845721889212_481585500260401152_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEH56eGz3UD5ap-YLZEAzr_6gr2wKoJqhDqCvbAqgmqEFRr5OonKNh5MxtOqmg6pwjAoGyqw6YMVNeJu9mS6svU&_nc_ohc=jyDF9PUw_0MAX-TC1__&_nc_oc=AQkfEEoOYd8knriniKDiGATSgW2VB0nk_Qco_zznwd-WahZV_9fiQcuoItZdsOHsjKc&_nc_ht=scontent.faep14-3.fna&oh=00_AT97k-S3duhfwIXSobMhFJ0KZsYYybM-ShToA9I-uNQvMA&oe=637D413F",
  "https://scontent.faep14-2.fna.fbcdn.net/v/t1.6435-9/60766937_2283845348555916_7029674364656156672_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHL8RZMcarl91ffMP0WqI77vlrbUgGbscu-WttSAZuxy4LXt60m7tbAm10zyTGpzp8l2Jz_48sL6m9-EV49cS8P&_nc_ohc=Yp7AnDFzb6MAX8BTnWC&_nc_ht=scontent.faep14-2.fna&oh=00_AT-9KJ9z73hYWeuUzRx8Q3K1NtP215hhmZIZ2bMcWjqoTQ&oe=637DE23C",
];

export const Gallery = () => {
  const [isOpen, setIsOpen] = useState({
    isOpen: false,
    url: "",
  });

  // Function for opening modal dialog
  const openModal = (url: any) => {
    setIsOpen({
      isOpen: true,
      url: url,
    });
  };

  // Function for closing modal dialog
  const closeModal = () => {
    setIsOpen({
      isOpen: false,
      url: "",
    });
  };

  return (
    <div className="container-fluid gallery-container">
      <div className="row">
        {imgUrls.map((url, index) => {
          return (
            <div key={index} className="col-sm-6 col-md-3 col-xl-2">
              <div className="gallery-card">
                <GalleryImage
                  className="gallery-thumbnail"
                  src={url}
                  alt={"Image number " + (index + 1)}
                />

                <span
                  className="card-icon-open fa fa-expand-arrows-alt"
                  // value={url}
                  onClick={() => openModal(url)}
                ></span>
              </div>
            </div>
          );
        })}
      </div>

      {isOpen.isOpen ? (
        <GalleryModal
          show={isOpen.isOpen}
          onClick={closeModal}
          src={isOpen.url}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

// https://github.com/felipefcor/Image-gallery-with-React

// import React, { Component } from 'react';
// import GalleryImage  from './GalleryImage';
// import GalleryModal from './GalleryModal';

// import    './Gallery.css';

//  let imgUrls = [
//     'https://source.unsplash.com/k3IogSsONd4/800x600',
//     'https://source.unsplash.com/gThfDnqgfMw/800x600',
//     'https://source.unsplash.com/_1x_x8Vtg2w/800x600',
//     'https://source.unsplash.com/TFP_s4_jRuE/800x600',
//     'https://source.unsplash.com/pElM4yerF5Q/800x600',
//     'https://source.unsplash.com/sFsy8CKyQ5c/800x600',
//     'https://source.unsplash.com/0WGucY1VHI0/800x600',
//     'https://source.unsplash.com/1ciHU-qPifY/800x600',
//     'https://source.unsplash.com/JZCJotPa96c/800x600',
//     'https://source.unsplash.com/8X19catOuNI/800x600',
//     'https://source.unsplash.com/_GDff35-Pa8/800x600',
//     'https://source.unsplash.com/XYok1nBGvhk/800x600'
//  ]

// export default class Gallery extends Component{
//     //constructor(props) {
//      // super(props);

//       state = {
//         isOpen: false,
//         url: ''
//       }

//   //}

//     render() {
//       return(

//         <div  className='container-fluid gallery-container'>

//           <div className='row'>
//             {
//               imgUrls.map((url, index) => {
//                  return (
//                  <div key={index} className='col-sm-6 col-md-3 col-xl-2'>

//                     <div className='gallery-card'>

//                       <GalleryImage  className='gallery-thumbnail' src={url} alt={'Image number ' + (index + 1)} />

//                       <span className='card-icon-open fa fa-expand-arrows-alt' value={url} onClick={() => this.openModal(url)}></span>

//                     </div>
//                   </div>
//                  )
//                })
//              }
//           </div>

//           <GalleryModal show={this.state.isOpen} onClick={this.closeModal} src={this.state.url} />

//         </div>
//       )
//     }

//     // Function for opening modal dialog
//     // I change the function to a arrow functions to avoid to declare the binding in the constructor
//     openModal = (url: any) => {

//        this.setState({
//          isOpen: true,
//          url: url
//        });
//      }

//     // Function for closing modal dialog
//     // I change the function to a arrow functions to avoid to declare the binding in the constructor
//     closeModal = () => {

//        this.setState({
//         isOpen: false,
//         url: ''
//       });
//     }
//   }

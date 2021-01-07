import React from 'react';
import bag from "../Products/ShopForm/bag.jpg";
import large from "../Products/ShopForm/large.png";
import emailjs from 'emailjs-com';
import './Checkout.css';



const Checkout = ({ bagQuantity, interested, onRouteChange,route }) => {
    let name = '';
    let message = '';
    let largeScale = "";
    let contact = '';
    let userEmail = '';
    if (interested) {
        largeScale = 'I am interested in a Large scale order'
    };
    const updateContact =(data)=>{
        contact =data.target.value;
    };
    const updateEmail =(data)=>{
        userEmail = data.target.value;
    };
    const updateMessage=(data)=>{
        message = data.target.value;
    };
    const updateName =(data)=>{
        name=data.target.value;
    } ;   


    function sendEmail(e) {

        e.preventDefault();

        emailjs.sendForm('service_1n01s4n', 'template_2igcyqn', e.target, 'user_CjJwAVXqSVa4P9xqDEp9o', {
            name: "julian",
            userEmail: "julianrowlandbanks@gmail.com",
            bagQuantity: "3",
            largeScale: "I am interested in Large scale order",
            message: "testtest",
            })
            .then((result) => {
                console.log(result.text);
                console.log(name);
                console.log(userEmail);
                console.log(bagQuantity);
                console.log(largeScale);
                console.log(message);
                onRouteChange('thank');
                {alert('Thank you, your order has been recieved!')};
                
            }, (error) => {
                console.log(error.text);
            });
    };

    return (

        <div className="">
        {route === 'thank'
        ?<div>Thanks mate, happy growing</div>
        :( <div className="centerPersonal mv4 shadow-5 b--black-10 backgroundImg" >
        <div className="centerPersonal mv4 shadow-5 b--black-10 contact-form ma3 grow bg-white">
            <h1 className='ma3 pa3'>Shopping Basket</h1>
            <ul className="list pl0 mt0 measure center">
                <li
                    className="flex items-center lh-copy  ph0-l bb b--black-10 padsides">
                    <img className="w2 h2 w3-ns h3-ns br-100 pa3" src={bag} />
                    <div className="pl3 flex-auto">
                        <span className="f6 db black-70">30lt bag</span>
                        <span className="f6 db black-70">Living Soil</span>
                    </div>
                    <div>
                        <p className="f6 link blue hover-dark-gray pa3">x{bagQuantity}</p>
                    </div>
                </li>
                {interested
                    ? <li
                        className="flex items-center lh-copy ph0-l bb b--black-10 padsides">
                        <img className="w2 h2 w3-ns h3-ns br-100 pa3" src={large} />
                        <div className="pl3 flex-auto">
                            <span className="f6 db black-70">500lt +</span>
                            <span className="f6 db black-70">Living soil</span>
                        </div>
                        <div>
                            <p className="f6 link blue hover-dark-gray pa3">Interested</p>
                        </div>
                    </li>
                    : <div></div>
                }
            </ul>
            </div>
        <div className='grow'>
            <form className="centerPersonal mv4 shadow-5 b--black-10 contact-form ma3  bg-white" onSubmit={sendEmail}>
                <div  className='pa3 '>
                    <label className='f5' >Name:</label>
                    <input type="text" name="user_name" onChange ={updateName}/>
                </div>
                <div  className='pa3 '>
                    <label className='f5 '>Email:</label>
                    <input type="email" name="user_email" onChange ={updateEmail}/>
                </div>
                <div className='pa3 '>
                    <label className='f5'>Message:</label>
                    <textarea name="message" onChange ={updateMessage} />
                </div>
                        
                <input className='f5 btnC btn-primaryC btn-xlC pointer ma3' type="submit" value="Place Order!" />
            </form>
            </div>
        </div>)
        }
        </div>
    )


}
export default Checkout;
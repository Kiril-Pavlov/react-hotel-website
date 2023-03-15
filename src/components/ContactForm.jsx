import React from "react";

import ColorButton from './ColorButton'

const ContactForm = () => {
  return (
    <div className="bg-mediumBlackClr">
      <h2>Write To Us!</h2>
      <p>
        Laborum accusantium libero commodi id officiis itaque esse adipisci,
        necessitatibus asperiores, illo odio.
      </p>
      <form action="">
        <div>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="E-mail" />
        </div>
        <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
        <div>
          <ColorButton text="SEND" link="#"/>
          <span>*We promise not to disclose your personal information to third parties.</span>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

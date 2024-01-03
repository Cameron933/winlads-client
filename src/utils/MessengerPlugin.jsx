import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const MessengerPlugin = ({pageId}) => {
  useEffect(() => {
    // Your SDK code
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v18.0',
      });
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  return (
    <>
      {/* Messenger Chat plugin Code */}
      <Helmet>
        <div id="fb-root"></div>
        {/* Your Chat plugin code */}
        <div id="fb-customer-chat" className="fb-customerchat"></div>

        <script>
          {`var chatbox = document.getElementById('fb-customer-chat');
          chatbox.setAttribute('page_id', ${pageId});
          chatbox.setAttribute('attribution', 'biz_inbox');`}
        </script>
      </Helmet>
    </>
  );
};

export default MessengerPlugin;



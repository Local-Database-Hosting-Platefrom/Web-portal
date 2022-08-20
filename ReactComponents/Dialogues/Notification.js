const { notification } = require("antd");

const openNotificationWithIcon = (type,message,description,placement) => {
    notification[type]({
      message:message,
      description:description,
        placement
        });
  };

export default openNotificationWithIcon
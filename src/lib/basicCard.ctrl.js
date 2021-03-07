/**
 * basicCard 템플릿
 * @param title_description_imageUrl object
 */
const basicCard = ({ title, description, imageUrl }) => {
  const template = (buttons) => {
    return {
      version: "2.0",
      template: {
        outputs: [
          {
            basicCard: {
              title,
              description,
              thumbnail: {
                imageUrl,
              },
              buttons,
            },
          },
        ],
      },
    };
  };
  return {
    webLink: ({ label, webLinkUrl }) => {
      return template({ label, action: "webLink", webLinkUrl });
    },
    block: ({ label, blockId, extra }) => {
      return template({ label, action: "block", blockId, extra });
    },
    message: ({ label, messageText }) => {
      return template({
        label,
        action: "message",
        messageText,
      });
    },
  };
};
module.exports = basicCard;

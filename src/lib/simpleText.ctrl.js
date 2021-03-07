/**
 * simpleText 템플릿
 * @param text  string
 */
const simpleText = (text) => {
  const template = (quickReplies) => {
    return {
      version: "2.0",
      template: {
        outputs: [
          {
            simpleText: {
              text,
            },
          },
        ],
        quickReplies,
      },
    };
  };

  return {
    block: ({ label, blockId, messageText, extra }) => {
      return template({
        label,
        action: "block",
        messageText,
        blockId,
        extra,
      });
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
module.exports = simpleText;

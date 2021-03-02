/**
 * simpleText 템플릿
 * @param text  string
 */
export const simpleText = (text, btnOption = false,btnData) => {
  const object = {
    block: () => {
      const { label, blockId,messageText,extra} = btnData;
      return {
        label,
        action: 'block',
        messageText,
        blockId,
        extra
      },
    },
    message: () => {
      const { label, messageText } = btnData;
      return {
        label,
        action: 'message',
        messageText,
      };
    },
  };
const a = btnOption?btnData:"";
  {
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
        quickReplies
      },
    };
  }
};

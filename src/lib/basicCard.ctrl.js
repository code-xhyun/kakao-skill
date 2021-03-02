/**
 * basicCard 템플릿
 * @param title_description_imageUrl object
 * @param btnOption button option => webLink,block,message
 * @param btnData
 */
export const basicCard = (
  { title, description, imageUrl },
  btnOption = false,
  btnData
) => {
  const object = {
    webLink: () => {
      const { label, webLinkUrl } = btnData;
      return { label, action: "webLink", webLinkUrl };
    },
    block: () => {
      const { label, blockId, extra } = btnData;
      return {
        label,
        action: "block",
        blockId,
        extra,
      };
    },
    message: () => {
      const { label, messageText } = btnData;
      return {
        label,
        action: "message",
        messageText,
      };
    },
  };
  const buttons = btnOption ? [object[btnOption]] : null;

  {
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
  }
};

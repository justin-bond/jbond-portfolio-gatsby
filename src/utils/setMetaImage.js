const setMetaImage = (image, seo) => {
  let metaImage = null;
  if (seo.metaImage) {
    metaImage = seo.metaImage.sourceUrl;
  } else if (image) {
    metaImage = image.sourceUrl;
  }

  return metaImage;
};

export default setMetaImage;

const blogTitleField = document.querySelector('.title');
const articleField = document.querySelector('.article');

// banner
const bannerImage = document.querySelector('#banner-upload');
const banner = document.querySelector('.banner');
let bannerPath;

const publishBtn = document.querySelector('.publish-btn');
const uploadInput = document.querySelector('#image-upload');

bannerImage.addEventListener('change', () => {
  uploadImage(bannerImage, 'banner');
})

const uploadImage = (uploadFile, uploadType) => {
  const [file] = uploadFile.files;
  if (file && file.type.includes('image')) {
    const formData = new FormData();
    formData.append('image', file)

    fetch('/upload', {
      method: 'post',
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      bannerPath = `${location.origin}/${data}`;
      banner.getElementsByClassName.backgroungImage = `url("${bannerPath}")`
    })
  }
}


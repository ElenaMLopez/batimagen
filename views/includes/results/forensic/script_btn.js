/**
  * @example
      const extension = ['.jpg', '.png','.tiff', '.gif', '.bmp'];

      let archive = "cucu.txt",
          newArchive = '',
          button = document.getElementsByTagName('button');

      for (var i = 0; i < button.length; i++) {
        let dataImage = button[i].getAttribute('data-image');
        button[i].addEventListener('click', function(){
          let archiveName = archive.split('.');
          newArchive = archiveName[0] + dataImage + '.' + archiveName[1];

          return newArchive
        });
      }
*/
/**
  * gestion de renderizado de diferentes fotos para forense
  * al pulsar diferentes botones
*/
const path = 'forensic/'
let urlImgame = document.querySelector(".forensic-image").src
let //file = urlImgame.split(path)[1],
    //newPath = '',
    button = document.getElementsByClassName('foresic-element_button');

for (var i = 0; i < button.length; i++) {
  let dataImage = button[i].getAttribute('data-image');
  
  button[i].addEventListener('click', function(event){
    //let fileName = file.split('.');
    //newPath = path + fileName[0] + dataImage + '.png';
    document.querySelector(".forensic-image").src = event.target.getAttribute("data-src");
  });
  
}

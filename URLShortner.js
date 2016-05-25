// Design a URL shortener
import _ from 'underscore';

class URLShortner(){
  const linkCodeLength = 6;

  constructor(url){
    this.url = url;
    this.links = {};
    this.chars = _.range(48, 58).concat(_.range(65, 91)).concat(_.range(97, 123));
  }

  getLink(shortenurl){
      const linkCode = shortenurl.split('http://ca.ke/')[1];
      if(linkCode && this.links[linkCode]){
        return this.links[linkCode];
      } else {
        throw new Error('Link does not exist');
      }
  }

  setLink(url){
    let found = false;
    let linkCode;
    do{
      linkCode = getRandomLinkCode();
    }while(linkCode in this.links);
    this.links[linkCode] = url;
    return `http//ca.ke/${linkCode}`;
  }

  getRandomLinkCode(){
    let linkCode = '';
    for(let i=0; i<linkCodeLength; i++){
      linkCode += String.fromCharCode(this.chars[ Math.floor(Math.random()*this.chars.length) ]);
    }
    return linkCode;
  }


}

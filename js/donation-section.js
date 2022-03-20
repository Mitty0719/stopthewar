const DONATION_DATA = [
  {
    name: '대한적십자사',
    text: '대한적십자사는 국제긴급구호 활동을 신속하게 지원할 수 있도록 국제긴급구호기금을 운영합니다. 도움이 필요한 곳, 어디서든 도움의 손길을 뻗을 수 있도록 참여해주세요.',
    color: '#FF0000',
    url: 'https://www.redcross.or.kr/donation_campaign/togetherofhumanity/index.htm',
    img: './images/donation_redcross.png'
  },
  {
    name: '유니세프',
    text: '5개 지역에서 근무하는 130여명의 헌신적인 유니세프 직원들은 자신의 안전에 대한 위협에도 현장을 떠나지 않고 어린이 구호활동에 매진하고 있습니다. 여러분 한분 한분의 정성이 우크라이나 어린이를 구할 수 있습니다',
    color: '#1CABE2',
    url: 'https://campaign.unicef.or.kr/ukraine?trackcode=22ukraine_hb',
    img: './images/donation_unicef.png'
  },
  {
    name: '페이스북',
    text: '주한 우크라이나 대사관은 러시아의 영토 침법과 관련하여 우크라이나에 대한 인도적 지원을 위해 원화 특별 계좌를 개설했습니다.',
    color: '#3B5998',
    url: 'https://ko-kr.facebook.com/UkrEmbassyKorea',
    img: './images/donation_embassy.png'
  },
  {
    name: '유엔난민기구',
    text: '집을 떠나 피난길에 오른 우크라이나 가족들에게 생명을 구하는 보호를 제공하기 위해 여러분의 도움이 절실합니다. 여러분의 후원으로 피난길에 오른 우크라이나인들을 안전하게 보호할 수 있습니다.',
    color: '#5B92E4',
    url: 'https://www.unhcr.or.kr/ukraine-emergency/?utm_source=google&utm_medium=cpc&utm_campaign=KR_PS_KO_UA&utm_term=%EC%9A%B0%ED%81%AC%EB%9D%BC%EC%9D%B4%EB%82%98&gclid=CjwKCAiAvaGRBhBlEiwAiY-yMC0_umwIch-K8zNXs_Kq6Wr7ADdrMMjvRGalWuXGUdBynjWUX61yzRoCnO0QAvD_BwE',
    img: './images/donation_unhcr.png'
  },
  {
    name: '세이브더칠드런',
    text: '언제나 아이들을 최우선으로 생각해주시는 후원자님들과 함께, 도움이 필요한 지역의 최전방에서 행동하겠습니다. 폭격과 총탄 속에서 목숨을 위협받고 있는 우크라이나의 아이들을 지켜주세요.',
    color: '#ED1B2D',
    url: 'https://www.sc.or.kr/participate/campaignView.do?NO=29049&_C_=4276',
    img: './images/donation_savethechildren.png'
  },
  {
    name: '월드비전',
    text: '월드비전은 우크라이나와 국경을 접하고 있는 루마니아를 중심으로 긴급구호 활동을 진행하고 있습니다. 상황에 따라 몰도바, 조지아 등 주변국과 우크라이나 내외 주요 파트너들과 협력하여 우크라이나 아동들을 보호할 예정입니다.',
    color: '#FF6D22',
    url: 'https://www.worldvision.or.kr/campaign/wv/22_Ukraine1?utm_source=google&utm_medium=searchad&utm_campaign=searchad&utm_content=09_04&utm_term=%EC%9B%94%EB%93%9C%EB%B9%84%EC%A0%84%EC%9A%B0%ED%81%AC%EB%9D%BC%EC%9D%B4%EB%82%98&mcode=12538&gclid=CjwKCAiAvaGRBhBlEiwAiY-yMI4DGKBjw3rZn7kl7NY16kWWUvY268d7Aqjk_dyj1nGWttp_U7mx1xoCy_EQAvD_BwE',
    img: './images/donation_worldvision.png'
  },
  {
    name: '밀알복지재단',
    text: '지금 이 순간에도 전쟁의 참혹함 속에서 우크라이나 주민들의 삶은 위협 받고 있습니다. 여러분이 보내주시는 사랑은 우크라이나 아이들과 주민들에게 내일을 살아갈 용기를 줍니다.',
    color: '#006400',
    url: 'https://www.miral.org/donate/special_view.asp?bbsIdx=51768&page=1&searchType=&searchKey=&bbsCode=custmSponsr',
    img: './images/donation_miral.png'
  },
  {
    name: '사랑의열매',
    text: '지금 이 순간에도 전쟁으로 삶의 터전을 잃어버리고 생명의 위협 속에서 지쳐가고 있을 우크라이나 전쟁 피해/피난민들을 위해 여러분의 관심이 필요합니다.',
    color: '#FF0000',
    url: 'https://www.chest.or.kr/base.do',
    img: './images/donation_communitychest.png'
  },
]

export class DonationSection{
  constructor(){
    this.section = document.querySelector('.donation-section');
    this.donationCon = document.querySelector('.donation-con');
    this.donationItems = [];
    this.setItems();

    // this.donationCon.addEventListener('mouseover', this.overMouse.bind(this));
    this.donationItems.forEach(item => {
      item.dom.addEventListener('mouseover', this.inItem.bind(this, item.dom));
      item.dom.addEventListener('mouseleave', this.outItem.bind(this, item.dom));
    });
  }

  setItems(){
    DONATION_DATA.forEach(item => {
      const donationItem = new DonationItem(item.name, item.text, item.color, item.url, item.img);
      donationItem.createItem(this.donationCon);

      this.donationItems.push(donationItem);
    });
  }

  // overMouse(e){
  //   let target = e.target;
    
  //   while(!e.target.classList.contains('donation-item')){
  //     if(target === document.body){
  //       return;
  //     }else{
  //       target = target.parentNode;
  //     }
  //   }

  //   this.inItem(target);
  // }
  inItem(target){
    const donationItem = this.donationItems.filter(value => value.dom === target)[0];

    target.classList.add('selected');
    this.setColor(target, '#fff', donationItem.color);
  }
  outItem(target){
    const donationItem = this.donationItems.filter(value => value.dom === target)[0];

    target.classList.remove('selected');
    this.setColor(target, donationItem.color, '#fff');
  }
  setColor(target, fontColor, backgroundColor){
    target.children[0].style.color = fontColor;
    target.style.backgroundColor = backgroundColor;
  }
}


class DonationItem{
  constructor(name, text, color, url, img){
    this.dom = null;
    this.name = name;
    this.text = text;
    this.color = color;
    this.url = url;
    this.img = img;
  }

  createItem(parentNode){
    const donationItem = document.createElement('li');
    const donationName = document.createElement('h3');
    const donationText = document.createElement('p');
    const donationLogo = document.createElement('img');

    donationItem.onclick = this.openURL.bind(this, this.url);

    donationItem.classList.add('donation-item');
    donationName.classList.add('donation-name');
    donationText.classList.add('donation-text');
    donationLogo.classList.add('donation-logo');

    donationName.innerHTML = this.name;
    donationText.innerHTML = this.text;
    donationName.style.color = this.color;
    donationLogo.src = this.img;

    donationItem.appendChild(donationName);
    donationItem.appendChild(donationText);
    donationItem.appendChild(donationLogo);

    parentNode.appendChild(donationItem);

    this.dom = donationItem;
  }

  openURL(url){
    window.open(url);
  }
}
import{s as V,ɵ as s,a as n,b as p,c as a,d as t,e as o,f as c,g as N,h as H,i as U,j as G,k as Q,l as R,m as Y,n as P,o as $,p as K}from"./index-BZfYD8q-.js";const d=class d{constructor(){this.menuOpen=V(!1)}};d.ɵfac=function(e){return new(e||d)},d.ɵcmp=s({type:d,selectors:[["app-header"]],decls:22,vars:4,consts:[[1,"header"],["aria-label","Menú",1,"header__burger",3,"click"],[1,"header__nav"],["href","#speakers",1,"header__link",3,"click"],["href","#venue",1,"header__link",3,"click"],["href","#agenda",1,"header__link",3,"click"],["href","#codigo-de-conducta",1,"header__link",3,"click"],["href","#faq",1,"header__link",3,"click"],["href","#",1,"btn-outline-rose",3,"click"],["href","#",1,"header__btn-buy",3,"click"],[1,"header__lang"]],template:function(e,r){e&1&&(n(0,"header",0)(1,"button",1),p("click",function(){return r.menuOpen.set(!r.menuOpen())}),a(2,"span")(3,"span")(4,"span"),t(),n(5,"nav",2)(6,"a",3),p("click",function(){return r.menuOpen.set(!1)}),o(7,"Speakers"),t(),n(8,"a",4),p("click",function(){return r.menuOpen.set(!1)}),o(9,"Venue"),t(),n(10,"a",5),p("click",function(){return r.menuOpen.set(!1)}),o(11,"Agenda"),t(),n(12,"a",6),p("click",function(){return r.menuOpen.set(!1)}),o(13,"Código de Conducta"),t(),n(14,"a",7),p("click",function(){return r.menuOpen.set(!1)}),o(15,"FAQ"),t(),n(16,"a",8),p("click",function(){return r.menuOpen.set(!1)}),o(17,"Quiero ser patrocinador"),t(),n(18,"a",9),p("click",function(){return r.menuOpen.set(!1)}),o(19,"Comprar entradas"),t(),n(20,"span",10),o(21,"ES  |  EN"),t()()()),e&2&&(c(),N("header__burger--open",r.menuOpen()),c(4),N("header__nav--open",r.menuOpen()))},styles:[`[_ngcontent-%COMP%]:root {
  --color-gray-0: #000000;
  --color-gray-10: #0F0F11;
  --color-gray-60: #8F8F8F;
  --color-gray-100: #FFFFFF;
  --color-angular-red: #F11653;
  --color-deep-rose: #E90464;
  --color-vivid-violet: #8514F5;
  --font-inter: 'Inter', sans-serif;
  --font-jetbrains: 'JetBrains Mono', monospace;
  --font-onest: 'Onest', sans-serif;
  --fs-hero: 100px;
  --fs-xxl: 80px;
  --fs-xl: 60px;
  --fs-lg: 50px;
  --fs-md-lg: 44px;
  --fs-md: 32px;
  --fs-body: 24px;
  --fs-sm: 20px;
  --fs-base: 16px;
  --fs-xs: 14px;
  --radius-pill: 100px;
  --radius-card: 20px;
  --radius-md: 16px;
  --radius-sm: 4px;
  --section-py: 80px;
  --section-px: 140px;
  --gap-xl: 80px;
  --gap-lg: 60px;
  --gap-md: 40px;
  --gap-sm: 35px;
  --gap-xs: 20px;
  --gap-xxs: 12px;
}

.btn-primary[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 100px;
  background: #F11653;
  color: #0F0F11;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-primary[_ngcontent-%COMP%] {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.btn-outline[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 100px;
  border: 1px solid #F11653;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline[_ngcontent-%COMP%]:hover {
  background: rgba(241, 22, 83, 0.1);
}
@media (max-width: 768px) {
  .btn-outline[_ngcontent-%COMP%] {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.btn-outline-white[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  border: 1px solid #FFFFFF;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline-white[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.1);
}
@media (max-width: 768px) {
  .btn-outline-white[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

.btn-outline-rose[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 100px;
  border: 1px solid #E90464;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline-rose[_ngcontent-%COMP%]:hover {
  background: rgba(233, 4, 100, 0.1);
}

.btn-rose[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  border-radius: 100px;
  background: #E90464;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-rose[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}

.btn-white[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  background: #FFFFFF;
  color: #0F0F11;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-white[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-white[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

.btn-white-violet[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  background: #FFFFFF;
  color: #B733C8;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-white-violet[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-white-violet[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

[_nghost-%COMP%] {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.header[_ngcontent-%COMP%] {
  padding: 13px 35px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: rgba(15, 15, 17, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
.header__burger[_ngcontent-%COMP%] {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 28px;
  height: 28px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 11;
}
.header__burger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  display: block;
  width: 100%;
  height: 2px;
  background: #FFFFFF;
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}
.header__burger--open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.header__burger--open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {
  opacity: 0;
}
.header__burger--open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}
.header__nav[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 40px;
}
.header__link[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #FFFFFF;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.header__link[_ngcontent-%COMP%]:hover {
  opacity: 0.8;
}
.header__btn-buy[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 100px;
  background: #E90464;
  border: 1px solid #E90464;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.header__btn-buy[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
.header__lang[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #FFFFFF;
  white-space: pre;
}

@media (max-width: 992px) {
  .header__nav[_ngcontent-%COMP%] {
    gap: 20px;
  }
}
@media (max-width: 768px) {
  .header[_ngcontent-%COMP%] {
    padding: 12px 20px;
    justify-content: space-between;
  }
  .header__burger[_ngcontent-%COMP%] {
    display: flex;
  }
  .header__nav[_ngcontent-%COMP%] {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    height: 100dvh;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 72px 28px 40px;
    background: rgba(15, 15, 17, 0.97);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    transition: right 0.3s ease;
  }
  .header__nav--open[_ngcontent-%COMP%] {
    right: 0;
  }
  .header__link[_ngcontent-%COMP%] {
    font-size: 18px;
  }
  .header__btn-buy[_ngcontent-%COMP%] {
    width: 100%;
    justify-content: center;
    padding: 12px 16px;
  }
}`],changeDetection:0});let v=d;const x=class x{};x.ɵfac=function(e){return new(e||x)},x.ɵcmp=s({type:x,selectors:[["app-hero"]],decls:16,vars:0,consts:[[1,"hero"],["src","/images/machu-picchu.svg","alt","Machu Picchu illustration",1,"hero__bg-image"],[1,"hero__content"],[1,"hero__date"],[1,"hero__title"],[1,"hero__description"],[1,"hero__actions"],["href","#",1,"btn-primary"],["href","#",1,"btn-outline"]],template:function(e,r){e&1&&(n(0,"section",0),a(1,"img",1),n(2,"div",2)(3,"p",3),o(4,"12 DE SEPTIEMBRE DE 2026 | LIMA - PERÚ"),t(),n(5,"h1",4),o(6,"Ng Conf Perú"),a(7,"br"),o(8,"2026"),t(),n(9,"p",5),o(10," ¡Únete a nosotros para una experiencia única en una conferencia sobre Angular en Perú! Descubre lo último en desarrollo de Angular y conecta con expertos y otros desarrolladores. "),t(),n(11,"div",6)(12,"a",7),o(13,"Comprar entradas"),t(),n(14,"a",8),o(15,"Postular tu charla"),t()()()())},styles:[`[_ngcontent-%COMP%]:root {
  --color-gray-0: #000000;
  --color-gray-10: #0F0F11;
  --color-gray-60: #8F8F8F;
  --color-gray-100: #FFFFFF;
  --color-angular-red: #F11653;
  --color-deep-rose: #E90464;
  --color-vivid-violet: #8514F5;
  --font-inter: 'Inter', sans-serif;
  --font-jetbrains: 'JetBrains Mono', monospace;
  --font-onest: 'Onest', sans-serif;
  --fs-hero: 100px;
  --fs-xxl: 80px;
  --fs-xl: 60px;
  --fs-lg: 50px;
  --fs-md-lg: 44px;
  --fs-md: 32px;
  --fs-body: 24px;
  --fs-sm: 20px;
  --fs-base: 16px;
  --fs-xs: 14px;
  --radius-pill: 100px;
  --radius-card: 20px;
  --radius-md: 16px;
  --radius-sm: 4px;
  --section-py: 80px;
  --section-px: 140px;
  --gap-xl: 80px;
  --gap-lg: 60px;
  --gap-md: 40px;
  --gap-sm: 35px;
  --gap-xs: 20px;
  --gap-xxs: 12px;
}

.btn-primary[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 100px;
  background: #F11653;
  color: #0F0F11;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-primary[_ngcontent-%COMP%] {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.btn-outline[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 100px;
  border: 1px solid #F11653;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline[_ngcontent-%COMP%]:hover {
  background: rgba(241, 22, 83, 0.1);
}
@media (max-width: 768px) {
  .btn-outline[_ngcontent-%COMP%] {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.btn-outline-white[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  border: 1px solid #FFFFFF;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline-white[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.1);
}
@media (max-width: 768px) {
  .btn-outline-white[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

.btn-outline-rose[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 100px;
  border: 1px solid #E90464;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline-rose[_ngcontent-%COMP%]:hover {
  background: rgba(233, 4, 100, 0.1);
}

.btn-rose[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  border-radius: 100px;
  background: #E90464;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-rose[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}

.btn-white[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  background: #FFFFFF;
  color: #0F0F11;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-white[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-white[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

.btn-white-violet[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  background: #FFFFFF;
  color: #B733C8;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-white-violet[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-white-violet[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

[_nghost-%COMP%] {
  display: block;
}

.hero[_ngcontent-%COMP%] {
  position: relative;
  min-height: 823px;
  overflow: hidden;
  background: linear-gradient(122deg, #0F0F11 27%, #300d1e 45%, #E90464 90%);
}
.hero__bg-image[_ngcontent-%COMP%] {
  position: absolute;
  right: -107px;
  top: 170px;
  width: 1064px;
  height: 682px;
  max-width: none;
  pointer-events: none;
}
.hero__content[_ngcontent-%COMP%] {
  position: relative;
  z-index: 1;
  padding: 157px 0 0 140px;
  max-width: 700px;
}
.hero__date[_ngcontent-%COMP%] {
  font-family: "JetBrains Mono", monospace;
  font-weight: 500;
  font-size: 20px;
  color: #FFFFFF;
  margin-bottom: 8px;
}
.hero__title[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 100px;
  line-height: 1;
  color: #FFFFFF;
  margin-bottom: 32px;
}
.hero__description[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: #FFFFFF;
  line-height: 1.4;
  margin-bottom: 48px;
  max-width: 600px;
}
.hero__actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 20px;
  align-items: center;
}

@media (max-width: 1200px) {
  .hero[_ngcontent-%COMP%] {
    min-height: 700px;
  }
  .hero__bg-image[_ngcontent-%COMP%] {
    right: -80px;
    width: 800px;
    height: 513px;
  }
  .hero__content[_ngcontent-%COMP%] {
    padding: 140px 0 0 80px;
  }
  .hero__title[_ngcontent-%COMP%] {
    font-size: 80px;
  }
}
@media (max-width: 992px) {
  .hero[_ngcontent-%COMP%] {
    min-height: 600px;
  }
  .hero__bg-image[_ngcontent-%COMP%] {
    right: -60px;
    width: 600px;
    height: 385px;
    opacity: 0.4;
  }
  .hero__content[_ngcontent-%COMP%] {
    padding: 120px 40px 60px;
    max-width: 100%;
  }
  .hero__title[_ngcontent-%COMP%] {
    font-size: 60px;
  }
  .hero__description[_ngcontent-%COMP%] {
    font-size: 20px;
  }
}
@media (max-width: 768px) {
  .hero[_ngcontent-%COMP%] {
    min-height: 500px;
  }
  .hero__content[_ngcontent-%COMP%] {
    padding: 80px 20px 40px;
  }
  .hero__title[_ngcontent-%COMP%] {
    font-size: 48px;
  }
  .hero__description[_ngcontent-%COMP%] {
    font-size: 18px;
  }
  .hero__actions[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: flex-start;
  }
}
@media (max-width: 480px) {
  .hero[_ngcontent-%COMP%] {
    min-height: auto;
    padding-bottom: 40px;
  }
  .hero__bg-image[_ngcontent-%COMP%] {
    width: 400px;
    height: 256px;
    right: -40px;
    top: auto;
    bottom: 0;
    opacity: 0.3;
  }
  .hero__content[_ngcontent-%COMP%] {
    padding: 72px 16px 32px;
  }
  .hero__date[_ngcontent-%COMP%] {
    font-size: 14px;
  }
  .hero__title[_ngcontent-%COMP%] {
    font-size: 36px;
    margin-bottom: 20px;
  }
  .hero__description[_ngcontent-%COMP%] {
    font-size: 16px;
    margin-bottom: 32px;
  }
  .hero__actions[_ngcontent-%COMP%] {
    gap: 12px;
  }
}`],changeDetection:0});let k=x;const l=class l{};l.ɵfac=function(e){return new(e||l)},l.ɵcmp=s({type:l,selectors:[["app-about"]],decls:10,vars:0,consts:[[1,"about"],["src","/images/angular-decoration.svg","alt","","aria-hidden","true",1,"about__decoration"],[1,"about__inner"],[1,"about__title"],[1,"about__text"]],template:function(e,r){e&1&&(n(0,"section",0),a(1,"img",1),n(2,"div",2)(3,"h2",3),o(4,"¿Qué es el Ng Conf Perú?"),t(),n(5,"div",4)(6,"p"),o(7," La Ng Conf Perú es la conferencia de tecnología más importante en el Perú dedicada exclusivamente al ecosistema de Angular. "),t(),n(8,"p"),o(9," Es un evento que busca reunir a la comunidad de desarrolladores de software, desde principiantes hasta expertos, para compartir las últimas tendencias y mejores prácticas del framework de Google. "),t()()()())},styles:[`[_ngcontent-%COMP%]:root {
  --color-gray-0: #000000;
  --color-gray-10: #0F0F11;
  --color-gray-60: #8F8F8F;
  --color-gray-100: #FFFFFF;
  --color-angular-red: #F11653;
  --color-deep-rose: #E90464;
  --color-vivid-violet: #8514F5;
  --font-inter: 'Inter', sans-serif;
  --font-jetbrains: 'JetBrains Mono', monospace;
  --font-onest: 'Onest', sans-serif;
  --fs-hero: 100px;
  --fs-xxl: 80px;
  --fs-xl: 60px;
  --fs-lg: 50px;
  --fs-md-lg: 44px;
  --fs-md: 32px;
  --fs-body: 24px;
  --fs-sm: 20px;
  --fs-base: 16px;
  --fs-xs: 14px;
  --radius-pill: 100px;
  --radius-card: 20px;
  --radius-md: 16px;
  --radius-sm: 4px;
  --section-py: 80px;
  --section-px: 140px;
  --gap-xl: 80px;
  --gap-lg: 60px;
  --gap-md: 40px;
  --gap-sm: 35px;
  --gap-xs: 20px;
  --gap-xxs: 12px;
}

.btn-primary[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 100px;
  background: #F11653;
  color: #0F0F11;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-primary[_ngcontent-%COMP%] {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.btn-outline[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 100px;
  border: 1px solid #F11653;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline[_ngcontent-%COMP%]:hover {
  background: rgba(241, 22, 83, 0.1);
}
@media (max-width: 768px) {
  .btn-outline[_ngcontent-%COMP%] {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.btn-outline-white[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  border: 1px solid #FFFFFF;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline-white[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.1);
}
@media (max-width: 768px) {
  .btn-outline-white[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

.btn-outline-rose[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 100px;
  border: 1px solid #E90464;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline-rose[_ngcontent-%COMP%]:hover {
  background: rgba(233, 4, 100, 0.1);
}

.btn-rose[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  border-radius: 100px;
  background: #E90464;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-rose[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}

.btn-white[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  background: #FFFFFF;
  color: #0F0F11;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-white[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-white[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

.btn-white-violet[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  background: #FFFFFF;
  color: #B733C8;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-white-violet[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-white-violet[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

[_nghost-%COMP%] {
  display: block;
}

.about[_ngcontent-%COMP%] {
  position: relative;
  background: #0F0F11;
  min-height: 490px;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.about__decoration[_ngcontent-%COMP%] {
  position: absolute;
  left: -77px;
  top: 0;
  width: 245px;
  height: 490px;
  pointer-events: none;
}
.about__inner[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 140px;
  gap: 80px;
}
.about__title[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 60px;
  color: #FFFFFF;
  max-width: 333px;
  flex-shrink: 0;
}
.about__text[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: #FFFFFF;
  text-align: right;
  max-width: 611px;
  line-height: 1.5;
}
.about__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {
  margin-top: 24px;
}

@media (max-width: 1200px) {
  .about__inner[_ngcontent-%COMP%] {
    padding: 0 80px;
    gap: 40px;
  }
  .about__title[_ngcontent-%COMP%] {
    font-size: 48px;
  }
  .about__text[_ngcontent-%COMP%] {
    font-size: 20px;
  }
}
@media (max-width: 992px) {
  .about[_ngcontent-%COMP%] {
    min-height: auto;
    padding: 60px 0;
  }
  .about__inner[_ngcontent-%COMP%] {
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
  }
  .about__title[_ngcontent-%COMP%] {
    max-width: 100%;
  }
  .about__text[_ngcontent-%COMP%] {
    text-align: center;
    max-width: 100%;
  }
}
@media (max-width: 768px) {
  .about__inner[_ngcontent-%COMP%] {
    padding: 0 20px;
    gap: 24px;
  }
  .about__title[_ngcontent-%COMP%] {
    font-size: 36px;
  }
  .about__text[_ngcontent-%COMP%] {
    font-size: 18px;
  }
}
@media (max-width: 480px) {
  .about[_ngcontent-%COMP%] {
    padding: 40px 0;
  }
  .about__inner[_ngcontent-%COMP%] {
    padding: 0 16px;
    gap: 20px;
  }
  .about__title[_ngcontent-%COMP%] {
    font-size: 28px;
  }
  .about__text[_ngcontent-%COMP%] {
    font-size: 16px;
  }
}`],changeDetection:0});let z=l;const _=class _{};_.ɵfac=function(e){return new(e||_)},_.ɵcmp=s({type:_,selectors:[["app-stats"]],decls:19,vars:0,consts:[[1,"stats"],[1,"stats__title"],[1,"stats__grid"],[1,"stats__item"],[1,"stats__number"],[1,"stats__label"]],template:function(e,r){e&1&&(n(0,"section",0)(1,"h2",1),o(2," Sé parte del ecosistema de Angular en Perú "),t(),n(3,"div",2)(4,"div",3)(5,"span",4),o(6,"+400"),t(),n(7,"span",5),o(8,"asistentes"),t()(),n(9,"div",3)(10,"span",4),o(11,"10"),t(),n(12,"span",5),o(13,"speakers"),t()(),n(14,"div",3)(15,"span",4),o(16,"3"),t(),n(17,"span",5),o(18,"workshops"),t()()()())},styles:[`[_ngcontent-%COMP%]:root {
  --color-gray-0: #000000;
  --color-gray-10: #0F0F11;
  --color-gray-60: #8F8F8F;
  --color-gray-100: #FFFFFF;
  --color-angular-red: #F11653;
  --color-deep-rose: #E90464;
  --color-vivid-violet: #8514F5;
  --font-inter: 'Inter', sans-serif;
  --font-jetbrains: 'JetBrains Mono', monospace;
  --font-onest: 'Onest', sans-serif;
  --fs-hero: 100px;
  --fs-xxl: 80px;
  --fs-xl: 60px;
  --fs-lg: 50px;
  --fs-md-lg: 44px;
  --fs-md: 32px;
  --fs-body: 24px;
  --fs-sm: 20px;
  --fs-base: 16px;
  --fs-xs: 14px;
  --radius-pill: 100px;
  --radius-card: 20px;
  --radius-md: 16px;
  --radius-sm: 4px;
  --section-py: 80px;
  --section-px: 140px;
  --gap-xl: 80px;
  --gap-lg: 60px;
  --gap-md: 40px;
  --gap-sm: 35px;
  --gap-xs: 20px;
  --gap-xxs: 12px;
}

.btn-primary[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 100px;
  background: #F11653;
  color: #0F0F11;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-primary[_ngcontent-%COMP%] {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.btn-outline[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 100px;
  border: 1px solid #F11653;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline[_ngcontent-%COMP%]:hover {
  background: rgba(241, 22, 83, 0.1);
}
@media (max-width: 768px) {
  .btn-outline[_ngcontent-%COMP%] {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.btn-outline-white[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  border: 1px solid #FFFFFF;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline-white[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.1);
}
@media (max-width: 768px) {
  .btn-outline-white[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

.btn-outline-rose[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 100px;
  border: 1px solid #E90464;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline-rose[_ngcontent-%COMP%]:hover {
  background: rgba(233, 4, 100, 0.1);
}

.btn-rose[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  border-radius: 100px;
  background: #E90464;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-rose[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}

.btn-white[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  background: #FFFFFF;
  color: #0F0F11;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-white[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-white[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

.btn-white-violet[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  background: #FFFFFF;
  color: #B733C8;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-white-violet[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-white-violet[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

[_nghost-%COMP%] {
  display: block;
}

.stats[_ngcontent-%COMP%] {
  background: #F11653;
  padding: 80px 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  overflow: hidden;
}
.stats__title[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 60px;
  color: #FFFFFF;
  text-align: center;
  max-width: 983px;
}
.stats__grid[_ngcontent-%COMP%] {
  display: flex;
  gap: 200px;
}
.stats__item[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.stats__number[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 80px;
  color: #FFFFFF;
}
.stats__label[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #FFFFFF;
}

@media (max-width: 1200px) {
  .stats[_ngcontent-%COMP%] {
    padding: 60px 80px;
  }
  .stats__grid[_ngcontent-%COMP%] {
    gap: 100px;
  }
  .stats__title[_ngcontent-%COMP%] {
    font-size: 48px;
  }
}
@media (max-width: 992px) {
  .stats[_ngcontent-%COMP%] {
    padding: 60px 40px;
  }
  .stats__grid[_ngcontent-%COMP%] {
    gap: 60px;
  }
  .stats__number[_ngcontent-%COMP%] {
    font-size: 60px;
  }
  .stats__label[_ngcontent-%COMP%] {
    font-size: 24px;
  }
}
@media (max-width: 768px) {
  .stats[_ngcontent-%COMP%] {
    padding: 48px 20px;
    gap: 40px;
  }
  .stats__title[_ngcontent-%COMP%] {
    font-size: 36px;
  }
  .stats__grid[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 32px;
  }
  .stats__number[_ngcontent-%COMP%] {
    font-size: 48px;
  }
  .stats__label[_ngcontent-%COMP%] {
    font-size: 20px;
  }
}
@media (max-width: 480px) {
  .stats[_ngcontent-%COMP%] {
    padding: 40px 16px;
    gap: 32px;
  }
  .stats__title[_ngcontent-%COMP%] {
    font-size: 28px;
  }
  .stats__number[_ngcontent-%COMP%] {
    font-size: 40px;
  }
  .stats__label[_ngcontent-%COMP%] {
    font-size: 18px;
  }
}`],changeDetection:0});let I=_;const f=class f{};f.ɵfac=function(e){return new(e||f)},f.ɵcmp=s({type:f,selectors:[["app-tickets"]],decls:14,vars:0,consts:[[1,"tickets"],[1,"tickets__content"],[1,"tickets__title"],[1,"tickets__text"],["href","#",1,"btn-primary","tickets__btn"],[1,"tickets__images"],[1,"tickets__card-top"],["src","/images/ticket-1.png","alt","Ticket Ng Conf"],[1,"tickets__card-bottom"],["src","/images/ticket-2.png","alt","Ticket Ng Conf reverso"],[1,"tickets__fade"]],template:function(e,r){e&1&&(n(0,"section",0)(1,"div",1)(2,"h2",2),o(3,"Consigue tu entrada ahora mismo"),t(),n(4,"p",3),o(5," Asegura tu lugar en la tercera edición de la Ng Conf Perú 2026 y disfruta de lo que estamos preparando para ti. "),t(),n(6,"a",4),o(7,"Comprar entrada"),t()(),n(8,"div",5)(9,"div",6),a(10,"img",7),t(),n(11,"div",8),a(12,"img",9)(13,"div",10),t()()())},styles:[`[_ngcontent-%COMP%]:root {
  --color-gray-0: #000000;
  --color-gray-10: #0F0F11;
  --color-gray-60: #8F8F8F;
  --color-gray-100: #FFFFFF;
  --color-angular-red: #F11653;
  --color-deep-rose: #E90464;
  --color-vivid-violet: #8514F5;
  --font-inter: 'Inter', sans-serif;
  --font-jetbrains: 'JetBrains Mono', monospace;
  --font-onest: 'Onest', sans-serif;
  --fs-hero: 100px;
  --fs-xxl: 80px;
  --fs-xl: 60px;
  --fs-lg: 50px;
  --fs-md-lg: 44px;
  --fs-md: 32px;
  --fs-body: 24px;
  --fs-sm: 20px;
  --fs-base: 16px;
  --fs-xs: 14px;
  --radius-pill: 100px;
  --radius-card: 20px;
  --radius-md: 16px;
  --radius-sm: 4px;
  --section-py: 80px;
  --section-px: 140px;
  --gap-xl: 80px;
  --gap-lg: 60px;
  --gap-md: 40px;
  --gap-sm: 35px;
  --gap-xs: 20px;
  --gap-xxs: 12px;
}

.btn-primary[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 100px;
  background: #F11653;
  color: #0F0F11;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-primary[_ngcontent-%COMP%] {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.btn-outline[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 100px;
  border: 1px solid #F11653;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline[_ngcontent-%COMP%]:hover {
  background: rgba(241, 22, 83, 0.1);
}
@media (max-width: 768px) {
  .btn-outline[_ngcontent-%COMP%] {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.btn-outline-white[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  border: 1px solid #FFFFFF;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline-white[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.1);
}
@media (max-width: 768px) {
  .btn-outline-white[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

.btn-outline-rose[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 100px;
  border: 1px solid #E90464;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline-rose[_ngcontent-%COMP%]:hover {
  background: rgba(233, 4, 100, 0.1);
}

.btn-rose[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  border-radius: 100px;
  background: #E90464;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-rose[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}

.btn-white[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  background: #FFFFFF;
  color: #0F0F11;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-white[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-white[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

.btn-white-violet[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  background: #FFFFFF;
  color: #B733C8;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-white-violet[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-white-violet[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

[_nghost-%COMP%] {
  display: block;
}

.tickets[_ngcontent-%COMP%] {
  background: #FFFFFF;
  padding: 80px 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  overflow: hidden;
}
.tickets__content[_ngcontent-%COMP%] {
  max-width: 515px;
}
.tickets__title[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 50px;
  color: #0F0F11;
  line-height: 1.1;
  margin-bottom: 24px;
}
.tickets__text[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: #0F0F11;
  line-height: 1.4;
  max-width: 468px;
  margin-bottom: 40px;
}
.tickets__btn[_ngcontent-%COMP%] {
  color: #FFFFFF;
  background: #F11653;
}
.tickets__images[_ngcontent-%COMP%] {
  position: relative;
  width: 473px;
  height: 344px;
  flex-shrink: 0;
}
.tickets__card-top[_ngcontent-%COMP%] {
  position: relative;
  z-index: 2;
  width: 473px;
  height: 242px;
  border-radius: 12px;
  overflow: hidden;
}
.tickets__card-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.tickets__card-bottom[_ngcontent-%COMP%] {
  position: relative;
  width: 473px;
  height: 102px;
  overflow: hidden;
  transform: scaleY(-1);
}
.tickets__card-bottom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 100%;
  height: 242px;
  object-fit: cover;
}
.tickets__fade[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.7), white);
  z-index: 1;
}

@media (max-width: 1200px) {
  .tickets[_ngcontent-%COMP%] {
    padding: 60px 80px;
  }
  .tickets__title[_ngcontent-%COMP%] {
    font-size: 40px;
  }
  .tickets__images[_ngcontent-%COMP%] {
    width: 380px;
  }
  .tickets__images[_ngcontent-%COMP%]   .tickets__card-top[_ngcontent-%COMP%], 
   .tickets__images[_ngcontent-%COMP%]   .tickets__card-bottom[_ngcontent-%COMP%] {
    width: 380px;
  }
  .tickets__images[_ngcontent-%COMP%]   .tickets__card-top[_ngcontent-%COMP%] {
    height: 194px;
  }
}
@media (max-width: 992px) {
  .tickets[_ngcontent-%COMP%] {
    flex-direction: column;
    padding: 60px 40px;
    text-align: center;
  }
  .tickets__content[_ngcontent-%COMP%] {
    max-width: 100%;
  }
  .tickets__text[_ngcontent-%COMP%] {
    max-width: 100%;
  }
  .tickets__images[_ngcontent-%COMP%] {
    width: 100%;
    max-width: 473px;
    height: auto;
  }
  .tickets__card-top[_ngcontent-%COMP%], 
   .tickets__card-bottom[_ngcontent-%COMP%] {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .tickets[_ngcontent-%COMP%] {
    padding: 48px 20px;
  }
  .tickets__title[_ngcontent-%COMP%] {
    font-size: 32px;
  }
  .tickets__text[_ngcontent-%COMP%] {
    font-size: 20px;
  }
}
@media (max-width: 480px) {
  .tickets[_ngcontent-%COMP%] {
    padding: 40px 16px;
    gap: 32px;
  }
  .tickets__title[_ngcontent-%COMP%] {
    font-size: 28px;
  }
  .tickets__text[_ngcontent-%COMP%] {
    font-size: 16px;
    margin-bottom: 24px;
  }
}`],changeDetection:0});let j=f;const m=class m{};m.ɵfac=function(e){return new(e||m)},m.ɵcmp=s({type:m,selectors:[["app-gallery"]],decls:24,vars:0,consts:[[1,"gallery"],[1,"gallery__title"],[1,"gallery__subtitle"],[1,"gallery__grid"],[1,"gallery__item","gallery__item--sm"],["src","/images/gallery-1.png","alt","Momento conferencia"],["src","/images/gallery-5.png","alt","Momento conferencia"],[1,"gallery__item","gallery__item--tall"],["src","/images/gallery-3.png","alt","Momento conferencia"],["src","/images/gallery-4.png","alt","Momento conferencia"],[1,"gallery__item","gallery__item--wide"],["src","/images/gallery-7.png","alt","Momento conferencia"],["src","/images/gallery-8.png","alt","Momento conferencia"],["src","/images/gallery-6.png","alt","Momento conferencia"],[1,"gallery__item","gallery__item--cta"],["src","/images/arrow-right.svg","alt","",1,"gallery__arrow"],[1,"gallery__cta-text"]],template:function(e,r){e&1&&(n(0,"section",0)(1,"h2",1),o(2,"Revive los mejores momentos"),t(),n(3,"p",2),o(4," Nuestra conferencia ha sido un viaje de momentos y conexiones inolvidables. "),t(),n(5,"div",3)(6,"div",4),a(7,"img",5),t(),n(8,"div",4),a(9,"img",6),t(),n(10,"div",7),a(11,"img",8),t(),n(12,"div",7),a(13,"img",9),t(),n(14,"div",10),a(15,"img",11),t(),n(16,"div",10),a(17,"img",12),t(),n(18,"div",4),a(19,"img",13),t(),n(20,"div",14),a(21,"img",15),n(22,"span",16),o(23,"VER GALERÍA"),t()()()())},styles:[`[_ngcontent-%COMP%]:root {
  --color-gray-0: #000000;
  --color-gray-10: #0F0F11;
  --color-gray-60: #8F8F8F;
  --color-gray-100: #FFFFFF;
  --color-angular-red: #F11653;
  --color-deep-rose: #E90464;
  --color-vivid-violet: #8514F5;
  --font-inter: 'Inter', sans-serif;
  --font-jetbrains: 'JetBrains Mono', monospace;
  --font-onest: 'Onest', sans-serif;
  --fs-hero: 100px;
  --fs-xxl: 80px;
  --fs-xl: 60px;
  --fs-lg: 50px;
  --fs-md-lg: 44px;
  --fs-md: 32px;
  --fs-body: 24px;
  --fs-sm: 20px;
  --fs-base: 16px;
  --fs-xs: 14px;
  --radius-pill: 100px;
  --radius-card: 20px;
  --radius-md: 16px;
  --radius-sm: 4px;
  --section-py: 80px;
  --section-px: 140px;
  --gap-xl: 80px;
  --gap-lg: 60px;
  --gap-md: 40px;
  --gap-sm: 35px;
  --gap-xs: 20px;
  --gap-xxs: 12px;
}

.btn-primary[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 100px;
  background: #F11653;
  color: #0F0F11;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-primary[_ngcontent-%COMP%] {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.btn-outline[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 100px;
  border: 1px solid #F11653;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline[_ngcontent-%COMP%]:hover {
  background: rgba(241, 22, 83, 0.1);
}
@media (max-width: 768px) {
  .btn-outline[_ngcontent-%COMP%] {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.btn-outline-white[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  border: 1px solid #FFFFFF;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline-white[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.1);
}
@media (max-width: 768px) {
  .btn-outline-white[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

.btn-outline-rose[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 100px;
  border: 1px solid #E90464;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline-rose[_ngcontent-%COMP%]:hover {
  background: rgba(233, 4, 100, 0.1);
}

.btn-rose[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  border-radius: 100px;
  background: #E90464;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-rose[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}

.btn-white[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  background: #FFFFFF;
  color: #0F0F11;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-white[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-white[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

.btn-white-violet[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  background: #FFFFFF;
  color: #B733C8;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-white-violet[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-white-violet[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

[_nghost-%COMP%] {
  display: block;
}

.gallery[_ngcontent-%COMP%] {
  background: #0F0F11;
  padding: 80px 76px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  overflow: hidden;
}
.gallery__title[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 60px;
  color: #FFFFFF;
  text-align: center;
}
.gallery__subtitle[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: #FFFFFF;
  text-align: center;
}
.gallery__grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(6, 220px);
  grid-template-rows: 220px 220px;
  gap: 8px;
  width: 1360px;
}
.gallery__item[_ngcontent-%COMP%] {
  overflow: hidden;
  border-radius: 4px;
}
.gallery__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.gallery__item--sm[_ngcontent-%COMP%] {
  grid-column: span 1;
  grid-row: span 1;
}
.gallery__item--tall[_ngcontent-%COMP%] {
  grid-column: span 1;
  grid-row: span 2;
}
.gallery__item--wide[_ngcontent-%COMP%] {
  grid-column: span 2;
  grid-row: span 1;
}
.gallery__item--cta[_ngcontent-%COMP%] {
  background: #8514F5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  transition: opacity 0.2s;
}
.gallery__item--cta[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
.gallery__arrow[_ngcontent-%COMP%] {
  width: 80px;
  height: 80px;
  transform: rotate(180deg);
}
.gallery__cta-text[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #FFFFFF;
  text-align: center;
}

@media (max-width: 1440px) {
  .gallery__grid[_ngcontent-%COMP%] {
    width: 100%;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 180px 180px;
  }
}
@media (max-width: 992px) {
  .gallery[_ngcontent-%COMP%] {
    padding: 60px 40px;
  }
  .gallery__title[_ngcontent-%COMP%] {
    font-size: 40px;
  }
  .gallery__grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 160px);
  }
  .gallery__item--tall[_ngcontent-%COMP%] {
    grid-row: span 2;
  }
  .gallery__item--wide[_ngcontent-%COMP%] {
    grid-column: span 2;
  }
}
@media (max-width: 768px) {
  .gallery[_ngcontent-%COMP%] {
    padding: 48px 20px;
    gap: 24px;
  }
  .gallery__title[_ngcontent-%COMP%] {
    font-size: 32px;
  }
  .gallery__subtitle[_ngcontent-%COMP%] {
    font-size: 18px;
  }
  .gallery__grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
  .gallery__item--tall[_ngcontent-%COMP%] {
    grid-row: span 1;
  }
  .gallery__item--wide[_ngcontent-%COMP%] {
    grid-column: span 2;
  }
  .gallery__arrow[_ngcontent-%COMP%] {
    width: 48px;
    height: 48px;
  }
  .gallery__cta-text[_ngcontent-%COMP%] {
    font-size: 16px;
  }
}
@media (max-width: 480px) {
  .gallery[_ngcontent-%COMP%] {
    padding: 40px 16px;
  }
  .gallery__title[_ngcontent-%COMP%] {
    font-size: 28px;
  }
  .gallery__subtitle[_ngcontent-%COMP%] {
    font-size: 16px;
  }
  .gallery__arrow[_ngcontent-%COMP%] {
    width: 40px;
    height: 40px;
  }
  .gallery__cta-text[_ngcontent-%COMP%] {
    font-size: 14px;
  }
}`],changeDetection:0});let E=m;const W=(O,i)=>i.name;function X(O,i){if(O&1&&(n(0,"div",5)(1,"div",6),a(2,"img",7),n(3,"div",8),a(4,"img",9),t()(),n(5,"h3",10),o(6),t(),n(7,"p",11),o(8),t()()),O&2){const e=i.$implicit;c(2),G("src",e.image,R)("alt",e.name),c(2),G("src",e.companyLogo,R),c(2),Q(e.name),c(2),Q(e.role)}}const h=class h{constructor(){this.speakersList=[{name:"Sofía Martínez",role:"Google Developer Expert Angular",image:"/images/speaker-placeholder.png",companyLogo:"/images/speaker-company.png"},{name:"Sofía Martínez",role:"Google Developer Expert Angular",image:"/images/speaker-placeholder.png",companyLogo:"/images/speaker-company.png"},{name:"Sofía Martínez",role:"Google Developer Expert Angular",image:"/images/speaker-placeholder.png",companyLogo:"/images/speaker-company.png"},{name:"Sofía Martínez",role:"Google Developer Expert Angular",image:"/images/speaker-placeholder.png",companyLogo:"/images/speaker-company.png"}]}};h.ɵfac=function(e){return new(e||h)},h.ɵcmp=s({type:h,selectors:[["app-speakers"]],decls:10,vars:0,consts:[["id","speakers",1,"speakers"],[1,"speakers__title"],[1,"speakers__subtitle"],["href","#",1,"btn-primary"],[1,"speakers__grid"],[1,"speakers__card"],[1,"speakers__card-image"],[3,"src","alt"],[1,"speakers__card-overlay"],["alt","Company",1,"speakers__card-company",3,"src"],[1,"speakers__card-name"],[1,"speakers__card-role"]],template:function(e,r){e&1&&(n(0,"section",0)(1,"h2",1),o(2,"Nuestros Speakers"),t(),n(3,"p",2),o(4," Muy pronto vamos a revelar a nuestros primeros speakers que estarán en esta edición. "),t(),n(5,"a",3),o(6,"Postula tu charla"),t(),n(7,"div",4),H(8,X,9,5,"div",5,W),t()()),e&2&&(c(8),U(r.speakersList))},styles:[`[_ngcontent-%COMP%]:root {
  --color-gray-0: #000000;
  --color-gray-10: #0F0F11;
  --color-gray-60: #8F8F8F;
  --color-gray-100: #FFFFFF;
  --color-angular-red: #F11653;
  --color-deep-rose: #E90464;
  --color-vivid-violet: #8514F5;
  --font-inter: 'Inter', sans-serif;
  --font-jetbrains: 'JetBrains Mono', monospace;
  --font-onest: 'Onest', sans-serif;
  --fs-hero: 100px;
  --fs-xxl: 80px;
  --fs-xl: 60px;
  --fs-lg: 50px;
  --fs-md-lg: 44px;
  --fs-md: 32px;
  --fs-body: 24px;
  --fs-sm: 20px;
  --fs-base: 16px;
  --fs-xs: 14px;
  --radius-pill: 100px;
  --radius-card: 20px;
  --radius-md: 16px;
  --radius-sm: 4px;
  --section-py: 80px;
  --section-px: 140px;
  --gap-xl: 80px;
  --gap-lg: 60px;
  --gap-md: 40px;
  --gap-sm: 35px;
  --gap-xs: 20px;
  --gap-xxs: 12px;
}

.btn-primary[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 100px;
  background: #F11653;
  color: #0F0F11;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-primary[_ngcontent-%COMP%] {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.btn-outline[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 100px;
  border: 1px solid #F11653;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline[_ngcontent-%COMP%]:hover {
  background: rgba(241, 22, 83, 0.1);
}
@media (max-width: 768px) {
  .btn-outline[_ngcontent-%COMP%] {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.btn-outline-white[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  border: 1px solid #FFFFFF;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline-white[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.1);
}
@media (max-width: 768px) {
  .btn-outline-white[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

.btn-outline-rose[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 100px;
  border: 1px solid #E90464;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline-rose[_ngcontent-%COMP%]:hover {
  background: rgba(233, 4, 100, 0.1);
}

.btn-rose[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  border-radius: 100px;
  background: #E90464;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-rose[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}

.btn-white[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  background: #FFFFFF;
  color: #0F0F11;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-white[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-white[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

.btn-white-violet[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  background: #FFFFFF;
  color: #B733C8;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-white-violet[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-white-violet[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

[_nghost-%COMP%] {
  display: block;
}

.speakers[_ngcontent-%COMP%] {
  background: #0F0F11;
  padding: 80px 266px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  overflow: hidden;
}
.speakers__title[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 60px;
  color: #FFFFFF;
  text-align: center;
}
.speakers__subtitle[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: #FFFFFF;
  text-align: center;
  max-width: 704px;
}
.speakers__grid[_ngcontent-%COMP%] {
  display: flex;
  gap: 12px;
}
.speakers__card[_ngcontent-%COMP%] {
  width: 280px;
  height: 380px;
  background: #0F0F11;
  border: 1px solid #8F8F8F;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}
.speakers__card-image[_ngcontent-%COMP%] {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
}
.speakers__card-image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {
  width: 279px;
  height: 279px;
  object-fit: cover;
  margin: 26px auto 0;
  display: block;
}
.speakers__card-overlay[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 0;
  left: -1px;
  right: 0;
  height: 176px;
  background: linear-gradient(to bottom, rgba(15, 15, 17, 0) 1.5%, #0F0F11 35.4%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 12px;
}
.speakers__card-company[_ngcontent-%COMP%] {
  height: 19px;
  width: auto;
}
.speakers__card-name[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #FFFFFF;
  text-align: center;
  margin-top: -12px;
  position: relative;
  z-index: 1;
}
.speakers__card-role[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #E90464;
  text-align: center;
  max-width: 190px;
  margin: 4px auto 0;
  line-height: 1.3;
}

@media (max-width: 1440px) {
  .speakers[_ngcontent-%COMP%] {
    padding: 80px 80px;
  }
}
@media (max-width: 1200px) {
  .speakers__grid[_ngcontent-%COMP%] {
    flex-wrap: wrap;
    justify-content: center;
  }
}
@media (max-width: 992px) {
  .speakers[_ngcontent-%COMP%] {
    padding: 60px 40px;
  }
  .speakers__title[_ngcontent-%COMP%] {
    font-size: 40px;
  }
  .speakers__grid[_ngcontent-%COMP%] {
    gap: 16px;
  }
}
@media (max-width: 768px) {
  .speakers[_ngcontent-%COMP%] {
    padding: 48px 20px;
    gap: 24px;
  }
  .speakers__title[_ngcontent-%COMP%] {
    font-size: 32px;
  }
  .speakers__subtitle[_ngcontent-%COMP%] {
    font-size: 18px;
  }
  .speakers__grid[_ngcontent-%COMP%] {
    gap: 12px;
    justify-content: center;
  }
  .speakers__card[_ngcontent-%COMP%] {
    width: calc(50% - 6px);
    height: auto;
    flex-shrink: 1;
  }
  .speakers__card-image[_ngcontent-%COMP%] {
    height: auto;
    aspect-ratio: 1;
  }
  .speakers__card-image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {
    width: 100%;
    height: 100%;
    margin: 0;
  }
}
@media (max-width: 480px) {
  .speakers[_ngcontent-%COMP%] {
    padding: 40px 16px;
  }
  .speakers__title[_ngcontent-%COMP%] {
    font-size: 28px;
  }
  .speakers__subtitle[_ngcontent-%COMP%] {
    font-size: 16px;
  }
  .speakers__card[_ngcontent-%COMP%] {
    width: 100%;
    max-width: 280px;
  }
}`],changeDetection:0});let T=h;const F=class F{};F.ɵfac=function(e){return new(e||F)},F.ɵcmp=s({type:F,selectors:[["app-sponsor-cta"]],decls:16,vars:0,consts:[[1,"sponsor-cta"],["src","/images/decoration-vector.svg","alt","","aria-hidden","true",1,"sponsor-cta__decoration"],[1,"sponsor-cta__title"],[1,"sponsor-cta__inner"],[1,"sponsor-cta__image"],["src","/images/sponsor-image.png","alt","Sponsors en la conferencia"],[1,"sponsor-cta__text"],["href","#",1,"btn-rose","sponsor-cta__btn"]],template:function(e,r){e&1&&(n(0,"section",0),a(1,"img",1),n(2,"h2",2),o(3," Únete como Sponsor de la Ng Conf Perú 2026 "),t(),n(4,"div",3)(5,"div",4),a(6,"img",5),t(),n(7,"div",6)(8,"p"),o(9," El éxito de la Ng Conf Perú depende en gran medida del generoso apoyo de nuestros valiosos patrocinadores. "),t(),n(10,"p"),o(11," Colabora con nosotros para presentar tu marca de una forma nueva e innovadora. Aprovecha la oportunidad de mostrar tus productos y servicios e interactuar con apasionados desarrolladores. "),t(),n(12,"p"),o(13," ¡Juntos podemos crear una experiencia excepcional para la comunidad de desarrollo de Angular! "),t(),n(14,"a",7),o(15," Quiero ser patrocinador "),t()()()())},styles:[`[_ngcontent-%COMP%]:root {
  --color-gray-0: #000000;
  --color-gray-10: #0F0F11;
  --color-gray-60: #8F8F8F;
  --color-gray-100: #FFFFFF;
  --color-angular-red: #F11653;
  --color-deep-rose: #E90464;
  --color-vivid-violet: #8514F5;
  --font-inter: 'Inter', sans-serif;
  --font-jetbrains: 'JetBrains Mono', monospace;
  --font-onest: 'Onest', sans-serif;
  --fs-hero: 100px;
  --fs-xxl: 80px;
  --fs-xl: 60px;
  --fs-lg: 50px;
  --fs-md-lg: 44px;
  --fs-md: 32px;
  --fs-body: 24px;
  --fs-sm: 20px;
  --fs-base: 16px;
  --fs-xs: 14px;
  --radius-pill: 100px;
  --radius-card: 20px;
  --radius-md: 16px;
  --radius-sm: 4px;
  --section-py: 80px;
  --section-px: 140px;
  --gap-xl: 80px;
  --gap-lg: 60px;
  --gap-md: 40px;
  --gap-sm: 35px;
  --gap-xs: 20px;
  --gap-xxs: 12px;
}

.btn-primary[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 100px;
  background: #F11653;
  color: #0F0F11;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-primary[_ngcontent-%COMP%] {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.btn-outline[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 100px;
  border: 1px solid #F11653;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline[_ngcontent-%COMP%]:hover {
  background: rgba(241, 22, 83, 0.1);
}
@media (max-width: 768px) {
  .btn-outline[_ngcontent-%COMP%] {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.btn-outline-white[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  border: 1px solid #FFFFFF;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline-white[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.1);
}
@media (max-width: 768px) {
  .btn-outline-white[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

.btn-outline-rose[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 100px;
  border: 1px solid #E90464;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline-rose[_ngcontent-%COMP%]:hover {
  background: rgba(233, 4, 100, 0.1);
}

.btn-rose[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  border-radius: 100px;
  background: #E90464;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-rose[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}

.btn-white[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  background: #FFFFFF;
  color: #0F0F11;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-white[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-white[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

.btn-white-violet[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  background: #FFFFFF;
  color: #B733C8;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-white-violet[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-white-violet[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

[_nghost-%COMP%] {
  display: block;
}

.sponsor-cta[_ngcontent-%COMP%] {
  background: #FFFFFF;
  padding: 80px 140px;
  position: relative;
  overflow: hidden;
}
.sponsor-cta__decoration[_ngcontent-%COMP%] {
  position: absolute;
  left: 33px;
  bottom: 0;
  width: 213px;
  height: 239px;
  pointer-events: none;
}
.sponsor-cta__title[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 50px;
  color: #0F0F11;
  text-align: center;
  margin-bottom: 60px;
}
.sponsor-cta__inner[_ngcontent-%COMP%] {
  display: flex;
  gap: 60px;
  align-items: flex-start;
}
.sponsor-cta__image[_ngcontent-%COMP%] {
  flex-shrink: 0;
  width: 520px;
  height: 347px;
  border-radius: 16px;
  overflow: hidden;
}
.sponsor-cta__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.sponsor-cta__text[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: #0F0F11;
  text-align: right;
  line-height: 1.5;
  max-width: 572px;
}
.sponsor-cta__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {
  margin-top: 20px;
}
.sponsor-cta__btn[_ngcontent-%COMP%] {
  margin-top: 32px;
  float: right;
}

@media (max-width: 1200px) {
  .sponsor-cta[_ngcontent-%COMP%] {
    padding: 60px 80px;
  }
  .sponsor-cta__image[_ngcontent-%COMP%] {
    width: 400px;
    height: 280px;
  }
  .sponsor-cta__title[_ngcontent-%COMP%] {
    font-size: 40px;
  }
  .sponsor-cta__text[_ngcontent-%COMP%] {
    font-size: 20px;
  }
}
@media (max-width: 992px) {
  .sponsor-cta[_ngcontent-%COMP%] {
    padding: 60px 40px;
  }
  .sponsor-cta__inner[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: center;
  }
  .sponsor-cta__image[_ngcontent-%COMP%] {
    width: 100%;
    max-width: 520px;
  }
  .sponsor-cta__text[_ngcontent-%COMP%] {
    text-align: center;
    max-width: 100%;
  }
  .sponsor-cta__btn[_ngcontent-%COMP%] {
    float: none;
    display: block;
    margin: 32px auto 0;
    width: fit-content;
  }
}
@media (max-width: 768px) {
  .sponsor-cta[_ngcontent-%COMP%] {
    padding: 48px 20px;
  }
  .sponsor-cta__title[_ngcontent-%COMP%] {
    font-size: 32px;
    margin-bottom: 32px;
  }
  .sponsor-cta__text[_ngcontent-%COMP%] {
    font-size: 18px;
  }
  .sponsor-cta__decoration[_ngcontent-%COMP%] {
    width: 140px;
    height: 157px;
    left: 0;
  }
}
@media (max-width: 480px) {
  .sponsor-cta[_ngcontent-%COMP%] {
    padding: 40px 16px;
  }
  .sponsor-cta__title[_ngcontent-%COMP%] {
    font-size: 24px;
    margin-bottom: 24px;
  }
  .sponsor-cta__inner[_ngcontent-%COMP%] {
    gap: 32px;
  }
  .sponsor-cta__text[_ngcontent-%COMP%] {
    font-size: 16px;
  }
  .sponsor-cta__image[_ngcontent-%COMP%] {
    height: auto;
  }
  .sponsor-cta__decoration[_ngcontent-%COMP%] {
    display: none;
  }
}`],changeDetection:0});let B=F;function Z(O,i){O&1&&(n(0,"div",3)(1,"div",4),a(2,"img",5)(3,"img",6),t()())}const u=class u{constructor(){this.members=[0,1,2,3]}};u.ɵfac=function(e){return new(e||u)},u.ɵcmp=s({type:u,selectors:[["app-team"]],decls:6,vars:0,consts:[[1,"team"],[1,"team__title"],[1,"team__grid"],[1,"team__member"],[1,"team__avatar"],["src","/images/team-shape.svg","alt","",1,"team__shape"],["src","/images/team-intersect.png","alt","Team member",1,"team__photo"]],template:function(e,r){e&1&&(n(0,"section",0)(1,"h2",1),o(2,"Nuestros Team"),t(),n(3,"div",2),H(4,Z,4,0,"div",3,Y),t()()),e&2&&(c(4),U(r.members))},styles:[`[_ngcontent-%COMP%]:root {
  --color-gray-0: #000000;
  --color-gray-10: #0F0F11;
  --color-gray-60: #8F8F8F;
  --color-gray-100: #FFFFFF;
  --color-angular-red: #F11653;
  --color-deep-rose: #E90464;
  --color-vivid-violet: #8514F5;
  --font-inter: 'Inter', sans-serif;
  --font-jetbrains: 'JetBrains Mono', monospace;
  --font-onest: 'Onest', sans-serif;
  --fs-hero: 100px;
  --fs-xxl: 80px;
  --fs-xl: 60px;
  --fs-lg: 50px;
  --fs-md-lg: 44px;
  --fs-md: 32px;
  --fs-body: 24px;
  --fs-sm: 20px;
  --fs-base: 16px;
  --fs-xs: 14px;
  --radius-pill: 100px;
  --radius-card: 20px;
  --radius-md: 16px;
  --radius-sm: 4px;
  --section-py: 80px;
  --section-px: 140px;
  --gap-xl: 80px;
  --gap-lg: 60px;
  --gap-md: 40px;
  --gap-sm: 35px;
  --gap-xs: 20px;
  --gap-xxs: 12px;
}

.btn-primary[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 100px;
  background: #F11653;
  color: #0F0F11;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-primary[_ngcontent-%COMP%] {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.btn-outline[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 100px;
  border: 1px solid #F11653;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline[_ngcontent-%COMP%]:hover {
  background: rgba(241, 22, 83, 0.1);
}
@media (max-width: 768px) {
  .btn-outline[_ngcontent-%COMP%] {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.btn-outline-white[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  border: 1px solid #FFFFFF;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline-white[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.1);
}
@media (max-width: 768px) {
  .btn-outline-white[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

.btn-outline-rose[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 100px;
  border: 1px solid #E90464;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline-rose[_ngcontent-%COMP%]:hover {
  background: rgba(233, 4, 100, 0.1);
}

.btn-rose[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  border-radius: 100px;
  background: #E90464;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-rose[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}

.btn-white[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  background: #FFFFFF;
  color: #0F0F11;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-white[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-white[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

.btn-white-violet[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  background: #FFFFFF;
  color: #B733C8;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-white-violet[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-white-violet[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

[_nghost-%COMP%] {
  display: block;
}

.team[_ngcontent-%COMP%] {
  background: #0F0F11;
  padding: 80px 266px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  overflow: hidden;
}
.team__title[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 60px;
  color: #FFFFFF;
  text-align: center;
}
.team__grid[_ngcontent-%COMP%] {
  display: flex;
  gap: 40px;
  align-items: center;
}
.team__member[_ngcontent-%COMP%] {
  flex-shrink: 0;
}
.team__avatar[_ngcontent-%COMP%] {
  position: relative;
  width: 240px;
  height: 268px;
}
.team__shape[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.team__photo[_ngcontent-%COMP%] {
  position: absolute;
  top: 48px;
  left: 10px;
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 50%;
}

@media (max-width: 1440px) {
  .team[_ngcontent-%COMP%] {
    padding: 80px 80px;
  }
}
@media (max-width: 1200px) {
  .team__grid[_ngcontent-%COMP%] {
    flex-wrap: wrap;
    justify-content: center;
  }
}
@media (max-width: 992px) {
  .team[_ngcontent-%COMP%] {
    padding: 60px 40px;
  }
  .team__title[_ngcontent-%COMP%] {
    font-size: 40px;
  }
}
@media (max-width: 768px) {
  .team[_ngcontent-%COMP%] {
    padding: 48px 20px;
    gap: 40px;
  }
  .team__title[_ngcontent-%COMP%] {
    font-size: 32px;
  }
  .team__grid[_ngcontent-%COMP%] {
    gap: 24px;
  }
  .team__member[_ngcontent-%COMP%] {
    flex-shrink: 1;
  }
  .team__avatar[_ngcontent-%COMP%] {
    width: 180px;
    height: 201px;
  }
  .team__photo[_ngcontent-%COMP%] {
    width: 165px;
    height: 165px;
    top: 36px;
    left: 7px;
  }
}
@media (max-width: 480px) {
  .team[_ngcontent-%COMP%] {
    padding: 40px 16px;
    gap: 32px;
  }
  .team__title[_ngcontent-%COMP%] {
    font-size: 28px;
  }
  .team__grid[_ngcontent-%COMP%] {
    gap: 20px;
  }
  .team__avatar[_ngcontent-%COMP%] {
    width: 150px;
    height: 168px;
  }
  .team__photo[_ngcontent-%COMP%] {
    width: 138px;
    height: 138px;
    top: 30px;
    left: 6px;
  }
}`],changeDetection:0});let D=u;const b=class b{};b.ɵfac=function(e){return new(e||b)},b.ɵcmp=s({type:b,selectors:[["app-venue"]],decls:21,vars:0,consts:[["id","venue",1,"venue"],[1,"venue__title"],[1,"venue__subtitle"],[1,"venue__content"],[1,"venue__left"],[1,"venue__photo"],["src","/images/venue-1.png","alt","UTEC Lima"],[1,"venue__info"],[1,"venue__name"],[1,"venue__address"],["href","#",1,"btn-outline-rose","venue__map-btn"],[1,"venue__right"],["src","/images/venue-2.png","alt","Mapa de ubicación"]],template:function(e,r){e&1&&(n(0,"section",0)(1,"h2",1),o(2," Lima será la capital de la Ng Conf Perú 2026 "),t(),n(3,"div",2)(4,"p"),o(5," La conferencia se celebrará Lima, y estamos definiendo el lugar ideal para esta experiencia. "),t(),n(6,"p"),o(7,"¡Muy pronto lo anunciaremos!"),t()(),n(8,"div",3)(9,"div",4)(10,"div",5),a(11,"img",6),t(),n(12,"div",7)(13,"h3",8),o(14," Universidad de Ingeniería y Tecnología - UTEC "),t(),n(15,"p",9),o(16," Jr. Medrano Silva 165, Barranco 15063 "),t(),n(17,"a",10),o(18," Ver en Google Maps "),t()()(),n(19,"div",11),a(20,"img",12),t()()())},styles:[`[_ngcontent-%COMP%]:root {
  --color-gray-0: #000000;
  --color-gray-10: #0F0F11;
  --color-gray-60: #8F8F8F;
  --color-gray-100: #FFFFFF;
  --color-angular-red: #F11653;
  --color-deep-rose: #E90464;
  --color-vivid-violet: #8514F5;
  --font-inter: 'Inter', sans-serif;
  --font-jetbrains: 'JetBrains Mono', monospace;
  --font-onest: 'Onest', sans-serif;
  --fs-hero: 100px;
  --fs-xxl: 80px;
  --fs-xl: 60px;
  --fs-lg: 50px;
  --fs-md-lg: 44px;
  --fs-md: 32px;
  --fs-body: 24px;
  --fs-sm: 20px;
  --fs-base: 16px;
  --fs-xs: 14px;
  --radius-pill: 100px;
  --radius-card: 20px;
  --radius-md: 16px;
  --radius-sm: 4px;
  --section-py: 80px;
  --section-px: 140px;
  --gap-xl: 80px;
  --gap-lg: 60px;
  --gap-md: 40px;
  --gap-sm: 35px;
  --gap-xs: 20px;
  --gap-xxs: 12px;
}

.btn-primary[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 100px;
  background: #F11653;
  color: #0F0F11;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-primary[_ngcontent-%COMP%] {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.btn-outline[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 100px;
  border: 1px solid #F11653;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline[_ngcontent-%COMP%]:hover {
  background: rgba(241, 22, 83, 0.1);
}
@media (max-width: 768px) {
  .btn-outline[_ngcontent-%COMP%] {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.btn-outline-white[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  border: 1px solid #FFFFFF;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline-white[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.1);
}
@media (max-width: 768px) {
  .btn-outline-white[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

.btn-outline-rose[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 100px;
  border: 1px solid #E90464;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline-rose[_ngcontent-%COMP%]:hover {
  background: rgba(233, 4, 100, 0.1);
}

.btn-rose[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  border-radius: 100px;
  background: #E90464;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-rose[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}

.btn-white[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  background: #FFFFFF;
  color: #0F0F11;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-white[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-white[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

.btn-white-violet[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  background: #FFFFFF;
  color: #B733C8;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-white-violet[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-white-violet[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

[_nghost-%COMP%] {
  display: block;
}

.venue[_ngcontent-%COMP%] {
  background: #FFFFFF;
  padding: 80px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  overflow: hidden;
}
.venue__title[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 60px;
  color: #0F0F11;
  text-align: center;
  max-width: 878px;
}
.venue__subtitle[_ngcontent-%COMP%] {
  font-family: "Onest", sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: #0F0F11;
  text-align: center;
  line-height: 1.25;
  max-width: 788px;
}
.venue__subtitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {
  margin-top: 8px;
}
.venue__content[_ngcontent-%COMP%] {
  display: flex;
}
.venue__left[_ngcontent-%COMP%] {
  width: 580px;
  flex-shrink: 0;
}
.venue__photo[_ngcontent-%COMP%] {
  width: 583px;
  height: 521px;
  overflow: hidden;
}
.venue__photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.venue__info[_ngcontent-%COMP%] {
  background: #0F0F11;
  width: 583px;
  height: 163px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 8px;
}
.venue__name[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #FFFFFF;
  text-align: right;
}
.venue__address[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #FFFFFF;
  text-align: right;
}
.venue__map-btn[_ngcontent-%COMP%] {
  margin-top: 8px;
}
.venue__right[_ngcontent-%COMP%] {
  width: 580px;
  height: 611px;
  overflow: hidden;
  flex-shrink: 0;
}
.venue__right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 1440px) {
  .venue[_ngcontent-%COMP%] {
    padding: 80px 40px;
  }
  .venue__left[_ngcontent-%COMP%] {
    width: 50%;
  }
  .venue__photo[_ngcontent-%COMP%], 
   .venue__info[_ngcontent-%COMP%] {
    width: 100%;
  }
  .venue__right[_ngcontent-%COMP%] {
    width: 50%;
    height: auto;
  }
}
@media (max-width: 992px) {
  .venue[_ngcontent-%COMP%] {
    padding: 60px 20px;
  }
  .venue__title[_ngcontent-%COMP%] {
    font-size: 40px;
  }
  .venue__content[_ngcontent-%COMP%] {
    flex-direction: column;
  }
  .venue__left[_ngcontent-%COMP%], 
   .venue__right[_ngcontent-%COMP%] {
    width: 100%;
  }
  .venue__photo[_ngcontent-%COMP%] {
    height: auto;
    aspect-ratio: 583/521;
  }
  .venue__right[_ngcontent-%COMP%] {
    height: 400px;
  }
}
@media (max-width: 768px) {
  .venue[_ngcontent-%COMP%] {
    padding: 48px 20px;
    gap: 24px;
  }
  .venue__title[_ngcontent-%COMP%] {
    font-size: 32px;
  }
  .venue__subtitle[_ngcontent-%COMP%] {
    font-size: 18px;
  }
  .venue__info[_ngcontent-%COMP%] {
    height: auto;
    padding: 16px;
    align-items: center;
  }
  .venue__name[_ngcontent-%COMP%] {
    text-align: center;
    font-size: 18px;
  }
  .venue__address[_ngcontent-%COMP%] {
    text-align: center;
    font-size: 14px;
  }
  .venue__right[_ngcontent-%COMP%] {
    height: 300px;
  }
}
@media (max-width: 480px) {
  .venue[_ngcontent-%COMP%] {
    padding: 40px 16px;
    gap: 20px;
  }
  .venue__title[_ngcontent-%COMP%] {
    font-size: 24px;
  }
  .venue__subtitle[_ngcontent-%COMP%] {
    font-size: 16px;
  }
  .venue__right[_ngcontent-%COMP%] {
    height: 220px;
  }
}`],changeDetection:0});let A=b;const y=class y{};y.ɵfac=function(e){return new(e||y)},y.ɵcmp=s({type:y,selectors:[["app-sponsors"]],decls:27,vars:0,consts:[[1,"sponsors"],["src","/images/sponsors-frame.svg","alt","","aria-hidden","true",1,"sponsors__frame"],[1,"sponsors__title"],[1,"sponsors__tier"],[1,"sponsors__logos","sponsors__logos--gold"],[1,"sponsors__card"],["src","/images/sponsor-venue-card.svg","alt","","aria-hidden","true",1,"sponsors__hex"],["src","/images/ic_googledevs 1.svg","alt","Google for Developers",1,"sponsors__logo"],["src","/images/Capa_1.svg","alt","Codeabien",1,"sponsors__logo"],[1,"sponsors__logos"],["src","/images/CardRecurso 1 2.svg","alt","UTP",1,"sponsors__logo","sponsors__logo--venue"],["src","/images/sessionize-logo-vertical-invert.svg","alt","Sessionize",1,"sponsors__logo","sponsors__logo--support"],["href","#",1,"btn-white"]],template:function(e,r){e&1&&(n(0,"section",0),a(1,"img",1),n(2,"h2",2),o(3,"Sponsors"),t(),n(4,"h3",3),o(5,"Gold"),t(),n(6,"div",4)(7,"div",5),a(8,"img",6)(9,"img",7),t(),n(10,"div",5),a(11,"img",6)(12,"img",8),t()(),n(13,"h3",3),o(14,"Venue"),t(),n(15,"div",9)(16,"div",5),a(17,"img",6)(18,"img",10),t()(),n(19,"h3",3),o(20,"Support"),t(),n(21,"div",9)(22,"div",5),a(23,"img",6)(24,"img",11),t()(),n(25,"a",12),o(26,"Quiero ser patrocinador"),t()())},styles:[`[_ngcontent-%COMP%]:root {
  --color-gray-0: #000000;
  --color-gray-10: #0F0F11;
  --color-gray-60: #8F8F8F;
  --color-gray-100: #FFFFFF;
  --color-angular-red: #F11653;
  --color-deep-rose: #E90464;
  --color-vivid-violet: #8514F5;
  --font-inter: 'Inter', sans-serif;
  --font-jetbrains: 'JetBrains Mono', monospace;
  --font-onest: 'Onest', sans-serif;
  --fs-hero: 100px;
  --fs-xxl: 80px;
  --fs-xl: 60px;
  --fs-lg: 50px;
  --fs-md-lg: 44px;
  --fs-md: 32px;
  --fs-body: 24px;
  --fs-sm: 20px;
  --fs-base: 16px;
  --fs-xs: 14px;
  --radius-pill: 100px;
  --radius-card: 20px;
  --radius-md: 16px;
  --radius-sm: 4px;
  --section-py: 80px;
  --section-px: 140px;
  --gap-xl: 80px;
  --gap-lg: 60px;
  --gap-md: 40px;
  --gap-sm: 35px;
  --gap-xs: 20px;
  --gap-xxs: 12px;
}

.btn-primary[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 100px;
  background: #F11653;
  color: #0F0F11;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-primary[_ngcontent-%COMP%] {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.btn-outline[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 100px;
  border: 1px solid #F11653;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline[_ngcontent-%COMP%]:hover {
  background: rgba(241, 22, 83, 0.1);
}
@media (max-width: 768px) {
  .btn-outline[_ngcontent-%COMP%] {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.btn-outline-white[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  border: 1px solid #FFFFFF;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline-white[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.1);
}
@media (max-width: 768px) {
  .btn-outline-white[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

.btn-outline-rose[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 100px;
  border: 1px solid #E90464;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline-rose[_ngcontent-%COMP%]:hover {
  background: rgba(233, 4, 100, 0.1);
}

.btn-rose[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  border-radius: 100px;
  background: #E90464;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-rose[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}

.btn-white[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  background: #FFFFFF;
  color: #0F0F11;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-white[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-white[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

.btn-white-violet[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  background: #FFFFFF;
  color: #B733C8;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-white-violet[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-white-violet[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

[_nghost-%COMP%] {
  display: block;
}

.sponsors[_ngcontent-%COMP%] {
  background: #0F0F11;
  padding: 80px 266px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  overflow: hidden;
  position: relative;
}
.sponsors__frame[_ngcontent-%COMP%] {
  position: absolute;
  right: 0;
  top: 0;
  width: 102px;
  height: 100%;
  pointer-events: none;
  object-fit: cover;
}
.sponsors__title[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 60px;
  color: #FFFFFF;
  text-align: center;
}
.sponsors__tier[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 44px;
  color: #FFFFFF;
  text-align: center;
}
.sponsors__logos[_ngcontent-%COMP%] {
  display: flex;
  gap: 100px;
  align-items: center;
  justify-content: center;
}
.sponsors__card[_ngcontent-%COMP%] {
  width: 230px;
  height: 257px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.sponsors__hex[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.sponsors__logo[_ngcontent-%COMP%] {
  position: relative;
  z-index: 1;
  max-width: 160px;
  max-height: 60px;
  width: auto;
  height: auto;
}
.sponsors__logo--venue[_ngcontent-%COMP%] {
  max-width: 180px;
  max-height: 56px;
}
.sponsors__logo--support[_ngcontent-%COMP%] {
  max-width: 180px;
  max-height: 89px;
}

@media (max-width: 1440px) {
  .sponsors[_ngcontent-%COMP%] {
    padding: 80px 80px;
  }
}
@media (max-width: 992px) {
  .sponsors[_ngcontent-%COMP%] {
    padding: 60px 40px;
  }
  .sponsors__title[_ngcontent-%COMP%] {
    font-size: 40px;
  }
  .sponsors__tier[_ngcontent-%COMP%] {
    font-size: 32px;
  }
  .sponsors__logos[_ngcontent-%COMP%] {
    gap: 40px;
    flex-wrap: wrap;
  }
}
@media (max-width: 768px) {
  .sponsors[_ngcontent-%COMP%] {
    padding: 48px 20px;
    gap: 24px;
  }
  .sponsors__title[_ngcontent-%COMP%] {
    font-size: 32px;
  }
  .sponsors__tier[_ngcontent-%COMP%] {
    font-size: 28px;
  }
  .sponsors__logos[_ngcontent-%COMP%] {
    gap: 20px;
  }
  .sponsors__card[_ngcontent-%COMP%] {
    width: 170px;
    height: 190px;
  }
  .sponsors__logo[_ngcontent-%COMP%] {
    max-width: 120px;
    max-height: 45px;
  }
  .sponsors__logo--venue[_ngcontent-%COMP%] {
    max-width: 130px;
    max-height: 42px;
  }
  .sponsors__logo--support[_ngcontent-%COMP%] {
    max-width: 130px;
    max-height: 65px;
  }
  .sponsors__frame[_ngcontent-%COMP%] {
    width: 60px;
  }
}
@media (max-width: 480px) {
  .sponsors[_ngcontent-%COMP%] {
    padding: 40px 16px;
  }
  .sponsors__title[_ngcontent-%COMP%] {
    font-size: 28px;
  }
  .sponsors__tier[_ngcontent-%COMP%] {
    font-size: 24px;
  }
  .sponsors__card[_ngcontent-%COMP%] {
    width: 140px;
    height: 157px;
  }
  .sponsors__logo[_ngcontent-%COMP%] {
    max-width: 100px;
    max-height: 36px;
  }
  .sponsors__logo--venue[_ngcontent-%COMP%] {
    max-width: 110px;
    max-height: 36px;
  }
  .sponsors__logo--support[_ngcontent-%COMP%] {
    max-width: 110px;
    max-height: 50px;
  }
  .sponsors__frame[_ngcontent-%COMP%] {
    display: none;
  }
}`],changeDetection:0});let J=y;const w=class w{};w.ɵfac=function(e){return new(e||w)},w.ɵcmp=s({type:w,selectors:[["app-cta"]],decls:10,vars:0,consts:[[1,"cta"],["src","/images/cta-decoration.svg","alt","","aria-hidden","true",1,"cta__decoration-left"],["src","/images/cta-vector.svg","alt","","aria-hidden","true",1,"cta__decoration-right"],[1,"cta__title"],[1,"cta__actions"],["href","#",1,"btn-outline-white"],["href","#",1,"btn-white-violet"]],template:function(e,r){e&1&&(n(0,"section",0),a(1,"img",1)(2,"img",2),n(3,"h2",3),o(4," Conecta con la comunidad de Angular en un evento que no puedes perderte "),t(),n(5,"div",4)(6,"a",5),o(7,"Únete a la lista de espera"),t(),n(8,"a",6),o(9,"Quiero ser patrocinador"),t()()())},styles:[`[_ngcontent-%COMP%]:root {
  --color-gray-0: #000000;
  --color-gray-10: #0F0F11;
  --color-gray-60: #8F8F8F;
  --color-gray-100: #FFFFFF;
  --color-angular-red: #F11653;
  --color-deep-rose: #E90464;
  --color-vivid-violet: #8514F5;
  --font-inter: 'Inter', sans-serif;
  --font-jetbrains: 'JetBrains Mono', monospace;
  --font-onest: 'Onest', sans-serif;
  --fs-hero: 100px;
  --fs-xxl: 80px;
  --fs-xl: 60px;
  --fs-lg: 50px;
  --fs-md-lg: 44px;
  --fs-md: 32px;
  --fs-body: 24px;
  --fs-sm: 20px;
  --fs-base: 16px;
  --fs-xs: 14px;
  --radius-pill: 100px;
  --radius-card: 20px;
  --radius-md: 16px;
  --radius-sm: 4px;
  --section-py: 80px;
  --section-px: 140px;
  --gap-xl: 80px;
  --gap-lg: 60px;
  --gap-md: 40px;
  --gap-sm: 35px;
  --gap-xs: 20px;
  --gap-xxs: 12px;
}

.btn-primary[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 100px;
  background: #F11653;
  color: #0F0F11;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-primary[_ngcontent-%COMP%] {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.btn-outline[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 100px;
  border: 1px solid #F11653;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline[_ngcontent-%COMP%]:hover {
  background: rgba(241, 22, 83, 0.1);
}
@media (max-width: 768px) {
  .btn-outline[_ngcontent-%COMP%] {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.btn-outline-white[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  border: 1px solid #FFFFFF;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline-white[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.1);
}
@media (max-width: 768px) {
  .btn-outline-white[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

.btn-outline-rose[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 100px;
  border: 1px solid #E90464;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline-rose[_ngcontent-%COMP%]:hover {
  background: rgba(233, 4, 100, 0.1);
}

.btn-rose[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  border-radius: 100px;
  background: #E90464;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-rose[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}

.btn-white[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  background: #FFFFFF;
  color: #0F0F11;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-white[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-white[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

.btn-white-violet[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  background: #FFFFFF;
  color: #B733C8;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-white-violet[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-white-violet[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

[_nghost-%COMP%] {
  display: block;
}

.cta[_ngcontent-%COMP%] {
  position: relative;
  padding: 102px 214px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 72px;
  overflow: hidden;
  background: radial-gradient(ellipse at 13% 86%, rgb(236, 40, 123) 0%, rgb(195, 49, 183) 50%, rgb(154, 57, 242) 100%);
}
.cta__decoration-left[_ngcontent-%COMP%] {
  position: absolute;
  left: 30px;
  top: -166px;
  width: 243px;
  height: 368px;
  opacity: 0.3;
  transform: rotate(105deg);
  pointer-events: none;
}
.cta__decoration-right[_ngcontent-%COMP%] {
  position: absolute;
  right: -80px;
  bottom: -50px;
  width: 275px;
  height: 135px;
  transform: rotate(90deg);
  pointer-events: none;
}
.cta__title[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 60px;
  color: #FFFFFF;
  text-align: center;
  max-width: 1012px;
  position: relative;
  z-index: 1;
}
.cta__actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 20px;
  align-items: center;
  position: relative;
  z-index: 1;
}

@media (max-width: 1200px) {
  .cta[_ngcontent-%COMP%] {
    padding: 80px 80px;
  }
  .cta__title[_ngcontent-%COMP%] {
    font-size: 48px;
  }
}
@media (max-width: 992px) {
  .cta[_ngcontent-%COMP%] {
    padding: 60px 40px;
  }
  .cta__title[_ngcontent-%COMP%] {
    font-size: 36px;
  }
  .cta__actions[_ngcontent-%COMP%] {
    flex-direction: column;
  }
}
@media (max-width: 768px) {
  .cta[_ngcontent-%COMP%] {
    padding: 48px 20px;
    gap: 40px;
  }
  .cta__title[_ngcontent-%COMP%] {
    font-size: 28px;
  }
}
@media (max-width: 480px) {
  .cta[_ngcontent-%COMP%] {
    padding: 40px 16px;
    gap: 32px;
  }
  .cta__title[_ngcontent-%COMP%] {
    font-size: 24px;
  }
  .cta__decoration-left[_ngcontent-%COMP%] {
    width: 140px;
    height: 212px;
  }
  .cta__decoration-right[_ngcontent-%COMP%] {
    width: 160px;
    height: 78px;
  }
}`],changeDetection:0});let S=w;const C=class C{};C.ɵfac=function(e){return new(e||C)},C.ɵcmp=s({type:C,selectors:[["app-footer"]],decls:26,vars:0,consts:[[1,"footer"],[1,"footer__top"],[1,"footer__org"],[1,"footer__org-label"],[1,"footer__logo"],["src","/images/logo_angular_peru_footer.svg","alt","Angular Perú",1,"footer__logo-mark"],[1,"footer__divider"],[1,"footer__bottom"],[1,"footer__nav"],["href","#",1,"footer__link"],["href","#codigo-de-conducta",1,"footer__link"],[1,"footer__social"],[1,"footer__social-label"],[1,"footer__social-icons"],["href","#","aria-label","Facebook"],["src","/images/ic-facebook.svg","alt","Facebook"],["href","#","aria-label","Instagram"],["src","/images/ic-instagram.svg","alt","Instagram"],["href","#","aria-label","Twitter"],["src","/images/ic-twitter.svg","alt","Twitter"]],template:function(e,r){e&1&&(n(0,"footer",0)(1,"div",1)(2,"div",2)(3,"span",3),o(4,"Organizado por:"),t(),n(5,"div",4),a(6,"img",5),t()()(),a(7,"div",6),n(8,"div",7)(9,"nav",8)(10,"a",9),o(11,"Sobre Angular Perú"),t(),n(12,"a",10),o(13,"Código de conducta"),t(),n(14,"a",9),o(15,"Contáctanos"),t()(),n(16,"div",11)(17,"span",12),o(18,"Síguenos en"),t(),n(19,"div",13)(20,"a",14),a(21,"img",15),t(),n(22,"a",16),a(23,"img",17),t(),n(24,"a",18),a(25,"img",19),t()()()()())},styles:[`[_ngcontent-%COMP%]:root {
  --color-gray-0: #000000;
  --color-gray-10: #0F0F11;
  --color-gray-60: #8F8F8F;
  --color-gray-100: #FFFFFF;
  --color-angular-red: #F11653;
  --color-deep-rose: #E90464;
  --color-vivid-violet: #8514F5;
  --font-inter: 'Inter', sans-serif;
  --font-jetbrains: 'JetBrains Mono', monospace;
  --font-onest: 'Onest', sans-serif;
  --fs-hero: 100px;
  --fs-xxl: 80px;
  --fs-xl: 60px;
  --fs-lg: 50px;
  --fs-md-lg: 44px;
  --fs-md: 32px;
  --fs-body: 24px;
  --fs-sm: 20px;
  --fs-base: 16px;
  --fs-xs: 14px;
  --radius-pill: 100px;
  --radius-card: 20px;
  --radius-md: 16px;
  --radius-sm: 4px;
  --section-py: 80px;
  --section-px: 140px;
  --gap-xl: 80px;
  --gap-lg: 60px;
  --gap-md: 40px;
  --gap-sm: 35px;
  --gap-xs: 20px;
  --gap-xxs: 12px;
}

.btn-primary[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 100px;
  background: #F11653;
  color: #0F0F11;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-primary[_ngcontent-%COMP%] {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.btn-outline[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 100px;
  border: 1px solid #F11653;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline[_ngcontent-%COMP%]:hover {
  background: rgba(241, 22, 83, 0.1);
}
@media (max-width: 768px) {
  .btn-outline[_ngcontent-%COMP%] {
    padding: 10px 20px;
    font-size: 16px;
  }
}

.btn-outline-white[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  border: 1px solid #FFFFFF;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline-white[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.1);
}
@media (max-width: 768px) {
  .btn-outline-white[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

.btn-outline-rose[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 100px;
  border: 1px solid #E90464;
  background: transparent;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  transition: background 0.2s;
}
.btn-outline-rose[_ngcontent-%COMP%]:hover {
  background: rgba(233, 4, 100, 0.1);
}

.btn-rose[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  border-radius: 100px;
  background: #E90464;
  color: #FFFFFF;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-rose[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}

.btn-white[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  background: #FFFFFF;
  color: #0F0F11;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-white[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-white[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

.btn-white-violet[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  border-radius: 100px;
  background: #FFFFFF;
  color: #B733C8;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
  white-space: nowrap;
  transition: opacity 0.2s;
}
.btn-white-violet[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
@media (max-width: 768px) {
  .btn-white-violet[_ngcontent-%COMP%] {
    padding: 10px 24px;
    font-size: 16px;
  }
}

[_nghost-%COMP%] {
  display: block;
}

.footer[_ngcontent-%COMP%] {
  background: #0F0F11;
  padding: 63px 140px 40px;
  overflow: hidden;
}
.footer__top[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;
}
.footer__org[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.footer__org-label[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #FFFFFF;
}
.footer__logo[_ngcontent-%COMP%] {
  height: 104px;
  width: 220px;
  overflow: hidden;
}
.footer__logo-mark[_ngcontent-%COMP%] {
  height: 100%;
  width: auto;
}
.footer__divider[_ngcontent-%COMP%] {
  width: 100%;
  height: 1px;
  background: #8F8F8F;
  margin-bottom: 24px;
}
.footer__bottom[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer__nav[_ngcontent-%COMP%] {
  display: flex;
  gap: 40px;
}
.footer__link[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #FFFFFF;
  transition: opacity 0.2s;
}
.footer__link[_ngcontent-%COMP%]:hover {
  opacity: 0.8;
}
.footer__social[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 16px;
}
.footer__social-label[_ngcontent-%COMP%] {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #FFFFFF;
}
.footer__social-icons[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
}
.footer__social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  display: flex;
  transition: opacity 0.2s;
}
.footer__social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  opacity: 0.8;
}
.footer__social-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 24px;
  height: 24px;
}

@media (max-width: 1200px) {
  .footer[_ngcontent-%COMP%] {
    padding: 63px 80px 40px;
  }
}
@media (max-width: 992px) {
  .footer[_ngcontent-%COMP%] {
    padding: 40px 40px 30px;
  }
  .footer__bottom[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
  }
  .footer__nav[_ngcontent-%COMP%] {
    flex-wrap: wrap;
    gap: 20px;
  }
}
@media (max-width: 768px) {
  .footer[_ngcontent-%COMP%] {
    padding: 32px 20px 24px;
  }
  .footer__top[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-bottom: 24px;
  }
  .footer__org[_ngcontent-%COMP%] {
    align-items: center;
  }
  .footer__logo[_ngcontent-%COMP%] {
    width: 180px;
    height: 85px;
  }
  .footer__bottom[_ngcontent-%COMP%] {
    align-items: center;
  }
  .footer__nav[_ngcontent-%COMP%] {
    justify-content: center;
    gap: 16px;
  }
  .footer__link[_ngcontent-%COMP%] {
    font-size: 14px;
  }
  .footer__social[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 8px;
  }
}
@media (max-width: 480px) {
  .footer[_ngcontent-%COMP%] {
    padding: 24px 16px 20px;
  }
  .footer__logo[_ngcontent-%COMP%] {
    width: 160px;
    height: 76px;
  }
  .footer__org-label[_ngcontent-%COMP%] {
    font-size: 14px;
  }
}`],changeDetection:0});let L=C;const M=class M{};M.ɵfac=function(e){return new(e||M)},M.ɵcmp=s({type:M,selectors:[["app-home"]],decls:14,vars:0,template:function(e,r){e&1&&(P(0,"app-header"),$(1,"main"),P(2,"app-hero")(3,"app-about")(4,"app-stats")(5,"app-tickets")(6,"app-gallery")(7,"app-speakers")(8,"app-sponsor-cta")(9,"app-team")(10,"app-venue")(11,"app-sponsors")(12,"app-cta"),K(),P(13,"app-footer"))},dependencies:[v,k,z,I,j,E,T,B,D,A,J,S,L],encapsulation:2});let q=M;export{q as default};

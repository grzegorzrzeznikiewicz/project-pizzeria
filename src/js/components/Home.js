/* global Flickity */
import {classNames, select} from '../settings.js';

class Home {
  constructor(element) {
    const thisHome = this;

    thisHome.render(element);
    thisHome.initWidgets();
    thisHome.initActions();
  }

  render(element) {
    const thisHome = this;

    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.boxOrder = thisHome.dom.wrapper.querySelector(select.home.boxOrder);
    thisHome.dom.boxBooking = thisHome.dom.wrapper.querySelector(select.home.boxBooking);
    thisHome.dom.carousel = thisHome.dom.wrapper.querySelector(select.home.carousel);
  }

  initWidgets() {
    const thisHome = this;

    thisHome.flickity = new Flickity(thisHome.dom.carousel, {
      autoPlay: 3000,
      wrapAround: true,
      prevNextButtons: false,
      pageDots: true,
    });
  }

  initActions() {
    const thisHome = this;

    thisHome.dom.boxOrder.addEventListener('click', function (event) {
      event.preventDefault();
      thisHome.activatePage('order');
    });

    thisHome.dom.boxBooking.addEventListener('click', function (event) {
      event.preventDefault();
      thisHome.activatePage('booking');
    });
  }

  activatePage(pageId) {
    const pages = document.querySelector(select.containerOf.pages).children;
    const navLinks = document.querySelectorAll(select.nav.links);

    for (let page of pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    for (let link of navLinks) {
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }

    window.location.hash = '#/' + pageId;
  }
}

export default Home;

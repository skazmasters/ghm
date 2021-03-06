class HeaderDropdown extends Widget {
  constructor(node) {
    super(node, 'js-header');

    this.$items = this.queryElements('.item');
    this.$submenuItems = this.queryElements('.submenu-item');
    this.$submenuLinks = this.queryElements('.submenu-link');

    this.timerId = null;
    this.resetTimerId = null;
    this.hovered = null;
    this.isOnHover = false;

    this.rememberScrollY = null;

    this.onMouseOverEvents = [];
    this.onItemMouseOut = this.onItemMouseOut.bind(this);
    this.submenuOnClick = this.submenuOnClick.bind(this);

    this.events();
    this.update();
  }

  update() {
    if (!Layout.isTabletLayout()) {
      this.bindEvents();
    } else {
      this.unbindEvents();
      this.setActive(false);
    }
  }

  bindEvents() {
    this.$items.forEach(item => {
      const event = this.onItemMouseOver(item);
      item.addEventListener('mouseover', event);
      this.onMouseOverEvents.push(event);

      item.addEventListener('mouseout', this.onItemMouseOut);
    });

    this.$submenuLinks.forEach(_sublink => _sublink.addEventListener('click', this.submenuOnClick));
  }

  unbindEvents() {
    this.$items.forEach((item, index) => {
      item.removeEventListener('mouseover', this.onMouseOverEvents[index]);
      item.removeEventListener('mouseout', this.onItemMouseOut);
    });
    this.$submenuLinks.forEach(_sublink => _sublink.removeEventListener('click', this.submenuOnClick));
  }

  events() {
    Layout.addListener(this.update.bind(this));
  }

  setActive(item) {
    this.$items.forEach(_item => _item.classList.contains('hover') ? _item.classList.remove('hover') : null);

    if (item) {
      item.classList.add('hover');

      // document.body.style.overflow = 'hidden'
      // document.body.style.paddingRight = '17px'

      // if (window.innerWidth >= 1320) {
      //   hideScrollbar(scrollBarWidth => {
      //     this.$node.style.marginRight = '-' + scrollBarWidth;
      //     this.$node.style.marginLeft = "-" + scrollBarWidth;
      //
      //     if (!this.isOnHover && this.$node.classList.contains('fixed-prepare')) {
      //       this.$node.querySelector('.container').style.margin = `0 0 0 ${(this.$node.getBoundingClientRect().width - (ScrollControl.scrollbarWidth() * 2) - (1320 - ScrollControl.scrollbarWidth())) / 2}px`;
      //     }
      //   });
      // } else if (window.innerWidth < 1320 && window.innerWidth >= 1024) {
      //   hideScrollbar(scrollBarWidth => {
      //     this.$node.style.marginRight = '-' + scrollBarWidth;
      //     this.$node.style.marginLeft = "-" + scrollBarWidth;
      //     this.$node.style.paddingRight = scrollBarWidth;
      //     this.$node.style.paddingLeft = scrollBarWidth;
      //
      //     if (!this.isOnHover && this.$node.classList.contains('fixed-prepare')) {
      //       this.$node.querySelector('.container').style.margin = ``;
      //     }
      //   });
      // }

      this.isOnHover = true;
    } else {
      // document.body.style.overflow = ''
      // document.body.style.paddingRight = ''

      // showScrollbar();
      this.$node.querySelector('.container').style.margin = ``;
      this.isOnHover = false;
    }
  }

  onItemMouseOut() {
    if (this.timerId) clearTimeout(this.timerId);

    this.resetTimerId = setTimeout(() => {
      this.setActive(null);
      this.hovered = null;
      this.$node.classList.remove('header--filled');
      this.$submenuItems.forEach(_subitem => _subitem.classList.contains('header-submenu__item--active') ? _subitem.classList.remove('header-submenu__item--active') : null);
    }, 50);
  }

  onItemMouseOver(item) {
    return e => {
      if (this.resetTimerId) clearTimeout(this.resetTimerId);

      this.hovered = item;

      if (this.timerId) clearTimeout(this.timerId);

      this.rememberScrollY = getScrollPos();
      this.timerId = setTimeout(() => {
        if (getScrollPos() === this.rememberScrollY) !this.hovered.classList.contains('hover') ? this.setActive(this.hovered) : null;
        this.$node.classList.add('header--filled');
      }, 200);
    };
  }

  submenuOnClick(e) {
    let target = e.target;

    if (target.closest('.js-header__submenu-item')) {
      this.$submenuItems.forEach(submenu => submenu !== target.closest('.js-header__submenu-item') ? submenu.classList.remove('header-submenu__item--active') : null);
      target.closest('.js-header__submenu-item').classList.toggle('header-submenu__item--active');
    }
  }

  static init(el) {
    new HeaderDropdown(el);
  }
}

window.HeaderDropdown = HeaderDropdown;

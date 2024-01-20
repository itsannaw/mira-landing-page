export const SCROLL_TYPES = {
  ABOUT: "about",
  WORKS: "works",
  TEAM: "team",
};

const TYPE_TO_ID_MAPPER = {
  [SCROLL_TYPES.ABOUT]: "about",
  [SCROLL_TYPES.WORKS]: "works",
  [SCROLL_TYPES.TEAM]: "team",
};

const OFFSET = 140;

export const scrollToType = (e, type) => {
  e.preventDefault();
  const id = TYPE_TO_ID_MAPPER[type];
  const element = document.getElementById(id);
  const y = element.getBoundingClientRect().top + window.scrollY - OFFSET;
  window.scroll({
    top: y,
    behavior: "smooth",
  });
};

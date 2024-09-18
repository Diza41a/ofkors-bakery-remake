import styled from "styled-components";

export const classes = {
  root: 'Landing-Instagram-Container',
};

const InstagramSection = styled('section')(() => ({
  '.eapps-instagram-feed-header-container, .eapps-widget-toolbar, .eapps-instagram-feed-posts-grid-load-more-container': {
    display: 'none!important',
  },

  '.eapps-instagram-feed>a': {
    display: 'none!important',
    transform: 'scale(0)',
  },
}));

export default {
  InstagramSection,
};

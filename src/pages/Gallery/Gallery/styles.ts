import styled from "styled-components";
import { rgba } from "polished";

export const classes = {
  root: 'GalleryWrapper',
  photoHoverOverlayWrapper: 'PhotoHoverOverlayWrapper',
};

const GalleryWrapper = styled('div')(() => ({
  '.react-photo-album--photo': {
    overflow: 'hidden',
    cursor: 'pointer',
    position: 'relative',

    '.react-photo-album--image': {
      transition: 'transform 0.35s ease-in-out',

      '&:hover': {
        transform: 'scale(1.1)',
        position: 'relative',
      },
    },

    '&:hover': {
      [`.${classes.photoHoverOverlayWrapper}`]: {
        opacity: 1,
      },
    },

    [`.${classes.photoHoverOverlayWrapper}`]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      opacity: 0,
      backgroundColor: rgba('black', 0.6),
      transition: 'opacity 0.35s ease-in-out',

      svg: {
        width: 48,
        height: 48,
        strokeWidth: 1,
        color: 'white',
      },
    },
  },
}));

export default {
  GalleryWrapper,
};

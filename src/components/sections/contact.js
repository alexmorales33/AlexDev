import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig, email } from '@config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';
const { fontSizes } = theme;

const StyledContainer = styled(Section)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 100px;
  a {
    ${mixins.inlineLink};
  }
`;
const StyledHeading = styled(Heading)`
  display: block;
  font-size: 60px;
  margin-bottom: 20px;
  justify-content: center;
  ${media.desktop`font-size: ${fontSizes.sm};`};
  &:before {
    bottom: 0;
    font-size: ${fontSizes.sm};
    ${media.desktop`font-size: ${fontSizes.smish};`};
  }
  &:after {
    display: none;
  }
`;

const StyledEmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`;

const Contact = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title, buttonText } = frontmatter;
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContainer id="contact" ref={revealContainer}>
      <StyledHeading>{title}</StyledHeading>

      <div dangerouslySetInnerHTML={{ __html: html }} />

      <StyledEmailLink href={`mailto:${email}`} target="_blank" rel="nofollow noopener noreferrer">
        {buttonText}
      </StyledEmailLink>
    </StyledContainer>
  );
};

Contact.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Contact;

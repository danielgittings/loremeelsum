import React from 'react';
import styled from 'styled-components';
import Sentence from './Sentence';

const PlaceholderParagraph = styled.p`
  line-height: 1.6;
  font-size: 1.1rem;
  color: hsl(0, 0%, 35%);
  max-width: 40rem;
  margin: 0 auto;
  padding: 1rem 0;

  @media all and (min-width: 600px) {
    font-size: 1.25rem;
  }
`;

const Paragraph = ({ words, paragraph, pTags }) => (
  <PlaceholderParagraph>
    {pTags ? <span>{'<p>'}</span> : null}
    {words.map((item, index) => (
      <Sentence key={`paragraph-${paragraph}-sentence${index}`} words={item} />
    ))}
    {pTags ? <span>{'</p>'}</span> : null}
  </PlaceholderParagraph>
);

export default Paragraph;

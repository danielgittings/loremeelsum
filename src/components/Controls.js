import React from 'react';
import styled from 'styled-components';

import arrow from '../img/arrow.svg';

const ControlsForm = styled.div`
  background-color: white;
  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 40px;
  border-radius: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  @media all and (min-width: 600px) {
    padding: 50px;
    box-shadow: 0px 0px 70px 20px rgba(0, 0, 0, 0.1);
    margin-bottom: 60px;
  }

  @media all and (min-width: 550px) {
    flex-direction: row;
    padding: 50px 20px;
  }

  > div:first-of-type {
    margin-bottom: 15px;

    @media all and (min-width: 550px) {
      margin-bottom: 0;
    }
  }

  > span {
    display: none;

    @media all and (min-width: 620px) {
      display: block;
    }
  }
`;

const PlaceholderSelector = styled.select`
  border: 3px solid hsl(193, 99%, 47%);
  margin: 0 20px 0 0;
  padding: 10px 50px 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  color: hsl(0, 0%, 35%);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  background: url(${arrow}) no-repeat;
  background-color: transparent;
  background-size: 15px;
  background-position: calc(100% - 15px) 17px;

  &::-ms-expand {
    display: none;
  }

  &:focus {
    outline: none;
    border-color: hsl(193, 99%, 36%);
  }

  @media all and (min-width: 550px) {
    margin: 0 20px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

const Controls = (props) => (
  <ControlsForm>
    <span>Give me</span>
    <FormContainer>
      <form onChange={props.setNumberOfParagraphs}>
        <label htmlFor="paragraph-count">Paragraph count</label>
        <PlaceholderSelector id="paragraph-count">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </PlaceholderSelector>
      </form>
      <span>{props.numParagraphs > 1 ? 'paragraphs' : 'paragraph'}</span>
    </FormContainer>
    <FormContainer>
      <form onChange={props.toggleTags}>
        <label htmlFor="p-tag-selector">Paragraph count</label>
        <PlaceholderSelector id="p-tag-selector">
          <option value="with">without</option>
          <option value="without">with</option>
        </PlaceholderSelector>
      </form>
      <span>{'<p>'} tags</span>
    </FormContainer>
  </ControlsForm>
);

export default Controls;

import React, { RefObject } from 'react';
import Card, { CardProps } from 'components/Card/Card';
import Select from './Select';
import DefaultPic from '../../img/defaultPic.jpg';
import '../../pages/MainPage/mainPage.css';
import './form.css';
import SuccessTick from '../../img/success-tick.svg';

type FormProps = Record<string, unknown>;
interface FormState {
  isTitleIncorrect: boolean;
  titleMessageError: boolean;
  isDescriptionIncorrect: boolean;
  descriptionMessageError: boolean;
  cards: CardProps[];
}

class Form extends React.Component<FormProps, FormState> {
  titleRef: RefObject<HTMLInputElement>;
  categoriesSelectRef: RefObject<HTMLSelectElement>;
  descriptionRef: RefObject<HTMLTextAreaElement>;
  imageRef: RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);

    this.titleRef = React.createRef();
    this.categoriesSelectRef = React.createRef();
    this.descriptionRef = React.createRef();
    this.imageRef = React.createRef();
    this.state = {
      isTitleIncorrect: true,
      titleMessageError: false,
      isDescriptionIncorrect: true,
      descriptionMessageError: false,
      cards: [],
    };
  }

  render() {
    return (
      <>
        <form
          className="form-cards"
          onSubmit={(e) => {
            e.preventDefault();
            const data: CardProps = {
              title: '',
              description: '',
              categories: [],
              picture: '',
            };
            data.title = this.titleRef.current?.value || '';
            data.description = this.descriptionRef.current?.value || '';
            const images = this.imageRef.current?.files || [];
            images.length > 0
              ? (data.picture = URL.createObjectURL(images[0]))
              : (data.picture = DefaultPic);
            if (this.categoriesSelectRef.current) {
              const optionsArray = Array.from(this.categoriesSelectRef.current?.options);
              data.categories = optionsArray.filter(({ selected: s }) => s).map((el) => el.value);
            }
            const newArrCards = [...this.state.cards, data];
            this.setState({ cards: [...newArrCards] });
          }}
        >
          <div className="form-content-container">
            <div className="input-container">
              <label>
                <span className="input-label">Title:</span>
                <div className="input-message-container">
                  <input
                    onChange={({ target }) => {
                      if (target.value.length > 3 && target.value.length < 20) {
                        this.setState({ isTitleIncorrect: false });
                      } else this.setState({ isTitleIncorrect: true });
                    }}
                    onBlur={() => {
                      if (this.state.isTitleIncorrect) this.setState({ titleMessageError: true });
                      else this.setState({ titleMessageError: false });
                    }}
                    ref={this.titleRef}
                  />
                  {this.state.titleMessageError ? (
                    <span className="error-message">Data is incorrect</span>
                  ) : (
                    ''
                  )}
                </div>
              </label>
            </div>
            <label>
              <span className="input-label">Categories:</span>
              <Select propRef={this.categoriesSelectRef} />
            </label>
            <div className="input-container">
              <label>
                <span className="input-label">Description:</span>
                <div className="input-message-container">
                  <textarea
                    className="text-description"
                    onChange={({ target }) => {
                      if (target.value.length > 10 && target.value.length < 50) {
                        this.setState({ isDescriptionIncorrect: false });
                      } else {
                        this.setState({ isDescriptionIncorrect: true });
                      }
                    }}
                    onBlur={() => {
                      if (this.state.isDescriptionIncorrect)
                        this.setState({ descriptionMessageError: true });
                      else this.setState({ descriptionMessageError: false });
                    }}
                    ref={this.descriptionRef}
                  />
                  {this.state.descriptionMessageError ? (
                    <span className="error-message">Data is incorrect</span>
                  ) : (
                    ''
                  )}
                </div>
              </label>
            </div>
            <label>
              <span className="input-label">Import image:</span>
              <input type="file" accept=".png, .jpg, .jpeg" ref={this.imageRef} />
            </label>
          </div>
          <div className="submit-container">
            <input
              type="submit"
              value="Submit"
              disabled={this.state.isTitleIncorrect || this.state.isDescriptionIncorrect}
              className="btn-submit"
            />
            <div className="success-message-container">
              <img src={SuccessTick} style={{ width: 20, height: 20 }} alt="Success" />
              <span className="success-message">Card is added</span>
            </div>
          </div>
        </form>
        <div className="cards-container">
          {this.state.cards.map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </div>
      </>
    );
  }
}

export default Form;

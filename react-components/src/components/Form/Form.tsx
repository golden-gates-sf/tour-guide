import React, { RefObject } from 'react';
import Card, { CardProps } from 'components/Card/Card';
import Select from './Select';
import DefaultPic from '../../img/defaultPic.jpg';
import '../../pages/MainPage/mainPage.css';
import './form.css';

type FormProps = Record<string, unknown>;
interface FormState {
  isSubmitted: boolean;
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
      isSubmitted: false,
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
            console.log(newArrCards);
            this.setState({ isSubmitted: true, cards: [...newArrCards] });
            console.log(this.state.cards);
          }}
        >
          <label>
            Title:
            <input ref={this.titleRef} />
          </label>
          <label>
            Categories:
            <Select propRef={this.categoriesSelectRef} />
          </label>
          <label>
            Description:
            <textarea className="text-description" ref={this.descriptionRef} />
          </label>
          <label>
            Import image:
            <input type="file" accept=".png, .jpg, .jpeg" ref={this.imageRef} />
          </label>
          <input type="submit" value="Submit" className="btn-submit" />
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

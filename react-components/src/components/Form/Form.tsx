import React, { RefObject } from 'react';
import Card from 'components/Card/Card';
import Select from './Select';
import DefaultPic from '../../img/defaultPic.jpg';
import '../../pages/MainPage/mainPage.css';
import './form.css';

type FormData = {
  title: string;
  categories: string[];
  description: string;
  picture: string;
};

type FormProps = Record<string, unknown>;
interface FormState {
  isSubmitted: boolean;
}

class Form extends React.Component<FormProps, FormState> {
  data: FormData;
  titleRef: RefObject<HTMLInputElement>;
  categoriesSelectRef: RefObject<HTMLSelectElement>;
  descriptionRef: RefObject<HTMLTextAreaElement>;
  imageRef: RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);

    this.data = {
      picture: '',
      categories: [],
      title: '',
      description: '',
    };
    this.titleRef = React.createRef();
    this.categoriesSelectRef = React.createRef();
    this.descriptionRef = React.createRef();
    this.imageRef = React.createRef();
    this.state = {
      isSubmitted: false,
    };
  }

  render() {
    return (
      <>
        <form
          className="form-cards"
          onSubmit={(e) => {
            e.preventDefault();
            this.data.title = this.titleRef.current?.value || '';
            this.data.description = this.descriptionRef.current?.value || '';
            const images = this.imageRef.current?.files || [];
            images.length > 0
              ? (this.data.picture = URL.createObjectURL(images[0]))
              : (this.data.picture = DefaultPic);
            if (this.categoriesSelectRef.current) {
              const optionsArray = Array.from(this.categoriesSelectRef.current?.options);
              console.log(optionsArray, this.categoriesSelectRef.current);
              this.data.categories = optionsArray
                .filter(({ selected: s }) => s)
                .map((el) => el.value);
            }
            console.log(this.categoriesSelectRef);
            this.setState({ isSubmitted: true });
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
        <div className="cards-container">{this.state.isSubmitted && <Card {...this.data} />}</div>
      </>
    );
  }
}

export default Form;

import React, { RefObject } from 'react';
import Card from 'components/Card/Card';
import './form.css';
import '../../pages/MainPage/mainPage.css';
import DefaultPic from '../../img/defaultPic.jpg';

const options = [
  { value: 'europe', label: 'Europe' },
  { value: 'usa', label: 'USA' },
  { value: 'nature', label: 'Nature' },
  { value: 'sea', label: 'Sea' },
  { value: 'city', label: 'City' },
  { value: 'mountains', label: 'Mountains' },
  { value: 'australia', label: 'Australia' },
  { value: 'luxury', label: 'Luxury' },
];

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
      categories: [''],
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
            this.setState({ isSubmitted: true });
          }}
        >
          <label>
            Title:
            <input ref={this.titleRef} />
          </label>
          <label>
            Categories:
            <select size={5} ref={this.categoriesSelectRef} multiple>
              {options.map((el, i) => (
                <option value={el.value} key={i}>
                  {el.label}
                </option>
              ))}
            </select>
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

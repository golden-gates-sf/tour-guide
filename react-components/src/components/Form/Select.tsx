import React, { RefObject } from 'react';
import DropListIcon from '../../img/droplist-2.png';
import closeBtn from '../../img/close.png';
import './select.css';

type option = { value: string; label: string };

export type SelectProps = {
  options: option[];
  getTags: any;
  submittedTags: string[];
};

interface SelectState {
  isDroplistVisible: boolean;
  isSearchOn: boolean;
  searchSuggestions: option[];
  cardTags: string[];
}

class Select extends React.Component<SelectProps, SelectState> {
  constructor(props: SelectProps) {
    super(props);

    this.state = {
      isDroplistVisible: false,
      isSearchOn: false,
      searchSuggestions: [],
      cardTags: [],
    };
  }

  // handleKeyDown(e: KeyboardEvent) {
  //   if (e.key === 'Enter') {
  //     console.log('Enter pressed');
  //   }
  // }

  render() {
    return (
      <div className="select-element">
        <div className="select-field">
          {this.state.cardTags.map((tagName) => (
            <div className="chosen-categories">
              <div className="chosen-categorie">
                {this.props.options.find((el) => el.value === tagName)?.label}
                <img
                  src={closeBtn}
                  className="cross-btn"
                  onClick={() => {
                    const newTagsArr = [...this.state.cardTags].filter((tag) => tag !== tagName);
                    this.setState({
                      cardTags: [...newTagsArr],
                    });
                    this.props.getTags([...newTagsArr]);
                    if (this.props.submittedTags.length === 0) this.setState({ cardTags: [] });
                  }}
                />
              </div>
            </div>
          ))}
          <input
            className="select-input"
            type="text"
            placeholder="Select..."
            onChange={(e) => {
              let availableOptions: option[] = [];
              this.props.options.forEach((el) => {
                if (el.value.includes(e.target.value.toLowerCase())) {
                  availableOptions.push(el);
                }
              });
              this.setState({
                isDroplistVisible: true,
                isSearchOn: true,
                searchSuggestions: availableOptions,
              });
            }}
          />

          <div
            className="select-button"
            onClick={() => {
              this.setState({ isDroplistVisible: !this.state.isDroplistVisible });
            }}
          >
            <img src={DropListIcon} className="droplist-icon" />
          </div>
        </div>
        <p
          className="no-options-p"
          style={{
            visibility:
              this.state.searchSuggestions.length === 0 &&
              this.state.isSearchOn &&
              this.state.isDroplistVisible
                ? 'visible'
                : 'hidden',
            height: this.state.searchSuggestions.length === 0 && this.state.isSearchOn ? 'auto' : 0,
            padding:
              this.state.searchSuggestions.length === 0 && this.state.isSearchOn ? '8px 7px' : 0,
          }}
        >
          No options...
        </p>
        <select
          className="select-droplist"
          style={{
            visibility: this.state.isDroplistVisible ? 'visible' : 'hidden',
            height: this.state.isDroplistVisible ? '200px' : 0,
          }}
          onChange={(e) => {
            if (!this.state.cardTags.includes(e.target.value)) {
              const newTagsArr = [...this.state.cardTags, e.target.value];
              this.setState({ cardTags: [...newTagsArr] });
              this.props.getTags([...newTagsArr]);
              // this.inputRef.current.value = '';
            }
          }}
          multiple={true}
        >
          {this.state.isSearchOn
            ? this.state.searchSuggestions.map((option, i) => (
                <option className="select-option" key={i} value={option.value}>
                  {option.label}
                </option>
              ))
            : this.props.options.map((el, i) => (
                <option className="select-option" key={i} value={el.value}>
                  {el.label}
                </option>
              ))}
        </select>
      </div>
    );
  }
}

export default Select;

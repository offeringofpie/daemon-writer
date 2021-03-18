import Sidebar from '../components/Sidebar';
import TextArea from '../components/TextArea';
import React from 'react';

export default class App extends React.Component<any, any> {
  private refarea = React.createRef<TextArea>();
  constructor(props: any) {
    super(props);

    const localStorage = window.localStorage.getItem('data');
    const data =
      localStorage !== null ? JSON.parse(localStorage as string) : null;
    this.state = {
      host: data !== null ? data.host : 'http://localhost:3000',
      longText: data !== null ? data.longText : '100',
      temperature: data !== null ? data.temperature : '0.7',
      top_k: data !== null ? data.top_k : '40',
      prefix: data !== null ? data.prefix : 'The grasshopper lies heavy.',
      result: data !== null ? data.result : '',
    };
    this.clearText = this.clearText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillMount() {
    document.body.className =
      'bg-gradient-to-br from-blue-300 to-blue-600 antialiased';
  }

  render() {
    return (
      <div className="md:flex justify-center max-w-7xl mx-auto">
        <Sidebar
          textArea={this.refarea}
          host={this.state.host}
          longText={this.state.longText}
          temperature={this.state.temperature}
          top_k={this.state.top_k}
          prefix={this.state.prefix}
          onSubmit={this.onSubmit}
          clearText={this.clearText}
        />
        <TextArea content={this.state.result} />
      </div>
    );
  }

  onSubmit(ev: any, state: any) {
    ev.preventDefault();

    fetch(`${state.host}`, {
      method: 'POST',
      body: JSON.stringify({
        length: state.longText,
        prefix: state.prefix,
        temperature: state.temperature,
        top_k: state.top_k,
      }),
    })
      .then((response: any) => response.json())
      .then((data) => {
        let cleanData = `<p>${data.text.replace(
          /(?:\r\n|\r|\n)/g,
          '<br>'
        )}</p>`;
        this.setState(
          (prevState: any) => {
            return {
              ...prevState,
              host: state.host,
              length: state.longText,
              temperature: state.temperature,
              top_k: state.top_k,
              prefix: state.prefix,
              result: prevState.result + cleanData,
            };
          },
          () => {
            window.localStorage.setItem('data', JSON.stringify(this.state));
          }
        );
      });
  }

  clearText() {
    this.setState(
      (prevState: any) => {
        return {
          ...prevState,
          result: '',
        };
      },
      () => {
        window.localStorage.setItem('data', JSON.stringify(this.state));
      }
    );
  }
}

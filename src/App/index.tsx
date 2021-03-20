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
    document.body.className = 'antialiased';
  }

  render() {
    return (
      <div className="md:flex justify-center max-w-7xl mx-auto flex-wrap">
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
        <footer className="flex-grow flex-full px-6 text-right text-blue-800">
          <span>2021</span>

          <a
            href="https://github.com/offeringofpie/daemon-writer"
            rel="noreferrer nofollow"
            target="_blank"
            title="GitHub Repository"
            className="hover:text-blue-600 transition-all duration-200 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              fill="currentColor"
              className="w-5 h-5 inline-block mx-2"
            >
              <path d="M33 29c-1.797 0-3 1.516-3 4s.89 5.047 3 5c2.219-.05 3.02-2.223 3-5-.016-2.484-1.207-4-3-4zm11.262-11.934c.273-1.343.39-6.101-1.582-11.066 0 0-4.532.496-11.383 5.2-1.434-.4-3.867-.598-6.297-.598-2.43 0-4.86.199-6.3.593C11.851 6.496 7.323 6 7.323 6c-1.976 4.965-1.879 9.61-1.586 11.066C3.418 19.586 2 22.61 2 26.742c0 17.965 14.906 18.254 18.668 18.254.852 0 2.543 0 4.332.004 1.79-.004 3.484-.004 4.332-.004 3.762 0 18.668-.289 18.668-18.254 0-4.133-1.418-7.156-3.738-9.676zM25.14 43H25c-9.43 0-16.844-1.34-16.844-10.504 0-2.195.778-4.23 2.617-5.922 3.07-2.82 8.262-1.328 14.157-1.328h.14c5.895 0 11.09-1.488 14.16 1.328 1.84 1.692 2.614 3.727 2.614 5.922C41.844 41.66 34.57 43 25.14 43zM17 29c-1.793 0-3 2.016-3 4.5s1.207 4.5 3 4.5c1.797 0 3-2.016 3-4.5S18.797 29 17 29z" />
            </svg>
            <span>offeringofpie / Daemon Writer</span>
          </a>
        </footer>
      </div>
    );
  }

  onSubmit(ev: any, state: any) {
    ev.preventDefault();
    console.log(state);

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

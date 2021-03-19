import react from 'react';
export default class TextArea extends react.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      content: props.content || '',
    };
  }

  componentWillReceiveProps(props: any) {
    this.setState({
      content: props.content,
    });
  }

  render() {
    return (
      <main
        className="p-6 md:flex-two-thirds border bg-opacity-70 bg-gray-100 border-gray-100 border-opacity-50 shadow-xl m-6 backdrop-filter-blur rounded-xl border-r-0 border-b-0 text-blue-600 font-serif text-center text-2xl"
        dangerouslySetInnerHTML={{ __html: this.state.content }}
      ></main>
    );
  }
}

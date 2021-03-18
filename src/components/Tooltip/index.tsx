import react from 'react';

export default class Tooltip extends react.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      text: props.text,
    };
  }

  render() {
    return (
      <span className="ml-1 has-tooltip relative cursor-pointer opacity-40 hover:opacity-100 transition-all duration-200 ease-in-out">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
        <span className="tooltip absolute bottom-0 left-5 font-normal text-sm w-128 block rounded-xl bg-gray-100 text-blue-800 p-3 bg-opacity-30 backdrop-blur shadow-xl">
          {this.state.text}
        </span>
      </span>
    );
  }
}

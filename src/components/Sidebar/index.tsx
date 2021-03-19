import react from 'react';
import Tooltip from '../Tooltip';
export default class Sidebar extends react.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      host: props.host || 'http://localhost:3000',
      longText: props.longText || '100',
      temperature: props.temperature || '0.7',
      top_k: props.top_k || '40',
      prefix: props.prefix || 'The grasshopper lies heavy.',
      onSubmit: props.onSubmit,
      onChange: props.onChange,
      clearText: props.clearText,
      result: props.result,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(ev: any) {
    const target = ev.target;
    this.setState({ [target.id]: target.value });
  }

  render() {
    return (
      <aside className="p-6 border bg-opacity-30 bg-gray-100 border-gray-100 border-opacity-50 shadow-xl m-6 backdrop-filter-blur rounded-xl text-blue-600 border-r-0 border-b-0 flex-third">
        <form
          method="POST"
          action="http://localhost:8888"
          onSubmit={(ev) => {
            console.log(this.state);
            this.state.onSubmit(ev, this.state);
          }}
        >
          <div className="pb-3">
            <label>
              <h4 className="font-semibold text-lg pb-2">Host</h4>
              <input
                type="text"
                id="host"
                className="w-full rounded-4xl border-0 bg-gray-100 focus:ring-0 focus:text-gray-600 hover:bg-gray-100 focus:bg-gray-100 hover:text-gray-500 text-base outline-none text-gray-500 py-2 px-4 resize-none leading-6 transition-all duration-200 ease-in-out bg-opacity-30 shadow-input"
                value={this.state.host.toString()}
                onChange={this.onChange}
              />
            </label>
          </div>
          <div className="pb-3">
            <label>
              <h4 className="font-semibold text-lg pb-2 flex align-middle">
                <span>Length</span>
                <Tooltip
                  text={`Number of tokens in generated text, if None (default), is determined by model hyperparameters`}
                />
              </h4>
              <input
                type="range"
                min="10"
                step="10"
                max="1000"
                id="longText"
                value={this.state.longText.toString()}
                onChange={this.onChange}
              />
              <span className="pt-3 block text-right text-xs">
                {this.state.longText}
              </span>
            </label>
          </div>
          <div className="pb-3">
            <label>
              <h4 className="font-semibold text-lg pb-2 flex align-middle">
                <span>Temperature</span>
                <Tooltip
                  text={`Float value controlling randomness in boltzmann distribution. Lower
          temperature results in less random completions. As the temperature
          approaches zero, the model will become deterministic and repetitive.
          Higher temperature results in more random completions.`}
                />
              </h4>
              <input
                id="temperature"
                type="range"
                step="0.1"
                min="0.1"
                max="1"
                value={this.state.temperature}
                onChange={this.onChange}
              />
              <span className="pt-3 block text-right text-xs">
                {this.state.temperature}
              </span>
            </label>
          </div>
          <div className="pb-3">
            <label>
              <h4 className="font-semibold text-lg pb-2 flex align-middle">
                <span>Top k</span>
                <Tooltip
                  text={`Integer value controlling diversity. 1 means only 1 word is
 considered for each step (token), resulting in deterministic completions,
 while 40 means 40 words are considered at each step. 0 (default) is a
 special setting meaning no restrictions. 40 generally is a good value.`}
                />
              </h4>
              <input
                id="top_k"
                type="range"
                max="100"
                min="0"
                value={this.state.top_k}
                onChange={this.onChange}
              />
              <span className="pt-3 block text-right text-xs">
                {this.state.top_k}
              </span>
            </label>
          </div>

          <div>
            <label
              htmlFor="prefix"
              className="block text-sm font-medium text-gray-700"
            >
              <h4 className="font-semibold text-lg pb-2">Prefix</h4>
              <textarea
                id="prefix"
                name="prefix"
                className="h-32 w-full rounded-4xl border-0 bg-gray-100 focus:ring-0 focus:text-gray-600 hover:bg-gray-100 focus:bg-gray-100 hover:text-gray-500 text-base outline-none text-gray-500 p-5 resize-none leading-6 transition-all duration-200 ease-in-out bg-opacity-30 shadow-input"
                placeholder="The grasshopper lies heavy"
                onChange={this.onChange}
                value={this.state.prefix}
              />
            </label>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="button"
              onClick={this.state.clearText}
              className="font-bold py-2 px-4 mr-2 rounded-xl inline-flex items-center text-gray-100 bg-red-500 hover:bg-red-600 focus:outline-nonetransition-all duration-200 ease-in-out border-0 shadow-button hover:shadow-button-hover"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                />
              </svg>
              <span>Delete</span>
            </button>
            <button
              className="font-bold py-2 px-4 rounded-xl inline-flex items-center text-gray-100 bg-green-500 hover:bg-green-600 focus:outline-nonetransition-all duration-200 ease-in-out border-0 shadow-button hover:shadow-button-hover"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Send</span>
            </button>
          </div>
        </form>
      </aside>
    );
  }
}

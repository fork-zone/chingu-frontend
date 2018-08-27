import * as React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

let md = `
**Tell us about your project**

What inspired you? What was the problem that you were trying to solve? What did you learn by completing this project?

(Feel free to use Markdown)
`

class ProjectDescription extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    editable: PropTypes.bool
  }

  static defaultProps = {
    text: md,
    editable: false
  }

  state = {
    isEditing: false
  };

  toggleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing});
  }

  render() {
    const { isEditing } = this.state;
    const { text } = this.props;

    return (
      <div className="project-portal__about">
        <button style={{ margin: '10px 20px'}}onClick={this.toggleEdit}>{isEditing ? 'Done' : 'Edit'}</button>
        { 
          isEditing
          ? <textarea style={{width: '100%', minHeight: '500px'}}>{text}</textarea>
          : <ReactMarkdown source={text} />
        }
      </div>
    );
  }
}

export default ProjectDescription;
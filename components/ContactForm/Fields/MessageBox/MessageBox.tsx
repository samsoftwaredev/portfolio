const MessageBox = ({
  field, // { name, value, onChange, onBlur }
  ...props
}) => <textarea {...field} {...props} />;

export default MessageBox;

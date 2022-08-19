const MessageBox = ({
  field, // { name, value, onChange, onBlur }
  ...props
}: any) => <textarea {...field} {...props} />;

export default MessageBox;

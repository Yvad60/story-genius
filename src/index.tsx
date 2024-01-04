import ForgeUI, { Fragment, IssuePanel, Text, render } from "@forge/ui";
ForgeUI; // not being used directly but still needs to be imported since forge/ui components depends on it

const App = () => {
  return (
    <Fragment>
      <Text>Hello world! This is an Issue Context App</Text>
    </Fragment>
  );
};

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>
);

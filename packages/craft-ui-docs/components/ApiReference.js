import React from "react";
import SectionTitle from "./SectionTitle";

const ApiReference = ({ properties }) => {
  const createMarkup = html => {
    return { __html: html };
  };
  return (
    <div>
      <SectionTitle title="API" />
      <hr />
      <table>
        <tr>
          <th>
            <ui-text weight="bold">Name</ui-text>
          </th>
          <th>
            <ui-text weight="bold">Description</ui-text>
          </th>
          <th>
            <ui-text weight="bold">Type</ui-text>
          </th>
          <th>
            <ui-text weight="bold">Default</ui-text>
          </th>
        </tr>
        {properties.map(propertyDoc => (
          <tr>
            <td dangerouslySetInnerHTML={createMarkup(propertyDoc.name)} />
            <td dangerouslySetInnerHTML={createMarkup(propertyDoc.desc)} />
            <td dangerouslySetInnerHTML={createMarkup(propertyDoc.type)} />
            <td dangerouslySetInnerHTML={createMarkup(propertyDoc.default)} />
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ApiReference;

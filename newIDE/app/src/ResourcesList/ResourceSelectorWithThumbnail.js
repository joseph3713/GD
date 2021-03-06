// @flow
import React from 'react';
import ResourcesLoader from '../ResourcesLoader';
import ResourceSelector from '../ResourcesList/ResourceSelector';
import {
  type ResourceSource,
  type ChooseResourceFunction,
  type ResourceKind,
} from '../ResourcesList/ResourceSource.flow';
import ResourceThumbnail from './ResourceThumbnail';
import { type ResourceExternalEditor } from '../ResourcesList/ResourceExternalEditor.flow';

type Props = {|
  project: gdProject,
  resourceSources: Array<ResourceSource>,
  onChooseResource: ChooseResourceFunction,
  resourceExternalEditors: Array<ResourceExternalEditor>,
  resourceKind: ResourceKind,
  resourceName: string,
  onChange: (string) => void,
  floatingLabelText?: string,
|};

const ResourceSelectorWithThumbnail = ({
  project,
  resourceSources,
  onChooseResource,
  resourceExternalEditors,
  resourceKind,
  resourceName,
  onChange,
  floatingLabelText,
}: Props) => {
  return (
    <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end' }}>
      <div style={{ flex: 1 }}>
        <ResourceSelector
          project={project}
          resourceSources={resourceSources}
          onChooseResource={onChooseResource}
          resourceExternalEditors={resourceExternalEditors}
          resourcesLoader={ResourcesLoader}
          resourceKind={resourceKind}
          fullWidth
          initialResourceName={resourceName}
          onChange={onChange}
          floatingLabelText={floatingLabelText}
        />
      </div>
      <ResourceThumbnail
        resourceName={resourceName}
        resourcesLoader={ResourcesLoader}
        project={project}
        style={{ marginLeft: 10 }}
      />
    </div>
  );
};

export default ResourceSelectorWithThumbnail;

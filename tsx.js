/* eslint-env es6, node, commonjs */
/* eslint-disable semi */
/**
 * @module tsx template
 * @author lilliputten <lilliputten@yandex.ru>
 * @since 2018.09.29, 23:06
 * @version 2018.09.29, 23:06
 */

const utils = require('./utils');

/** elemTmpl ** {{{
 */
const elemTmpl = (block, elem) => {
  const header = utils.getHeader({ block, elem });
  const objectName = utils.getObjectName({ block, elem });
  const entityName = utils.getEntityName({ block, elem });
  /** Content... {{{ elemTmpl */
  return `${header}

import * as React from 'react';
// import { Registry, withRegistry, RegistryConsumer } from '@bem-react/di';
import { cn } from '@bem-react/classname';

// import AppStore from 'lib/flux/AppStore';

// // Mods support...
// import { compose, IClassNameProps } from '@bem-react/core';

// NOTE: Import own styles before mods (if any)!
// import './${entityName}.css';

// // Mods import...
// import { ${objectName}Mod1, I${objectName}ReadyProps } from './_ready/${entityName}_mod1';
// import { ${objectName}Mod2Val, I${objectName}Mod2ValProps } from './_mode/${entityName}_mod2_val';

// Classname
const cn${objectName} = cn('${block}');

// // Import resources...
// const itemSvg = require('./item.svg');

// Props definitions...
export interface I${objectName}Props {
  // Place props definitions here...
  // mode?: string;
}
// // Mods props definitions...
// export interface I${objectName}Props extends
// I${objectName}Mod2ValProps,
// I${objectName}ReadyProps,
// IClassNameProps {
//   // children?: React.ReactNode;
//   // Place props definitions here...
// }

// State definitions...
export interface I${objectName}State {
  // Place state definitions here...
}

// Class prototype...
class ${objectName} extends React.Component<I${objectName}Props, I${objectName}State> {

  public block = '${block}';
  public elem = '${elem}';

  // Properties...

  // // Window resize callback binding sample (if used)
  // private _onWindowResize: (e: any) => void;

  // Lifecycle...

  // /** constructor ** {{{ */
  // constructor(props: I${objectName}Props) {
  //   super(props);
  //   this.state = {
  //   };
  //   // // Make handler binding (if used)
  //   // this._onWindowResize = this.onWindowResize.bind(this);
  // }/*}}}*/
  // /** componentDidMount ** {{{ */
  // public componentDidMount() {
  //   // window.addEventListener('resize', this._onWindowResize);
  // }/*}}}*/
  // /** componentWillUnmount ** {{{ */
  // public componentWillUnmount() {
  //   // window.removeEventListener('resize', this._onWindowResize);
  // }/*}}}*/
  // /** shouldComponentUpdate ** {{{ */
  // public shouldComponentUpdate(nextProps: I${objectName}Props, nextState: I${objectName}State) {
  //   const currProps = this.props;
  //   const currState = this.state;
  //   return false;
  // }/*}}}*/

  /** render ** {{{ */
  public render() {
    // const { mode } = this.props;
    return (
      <div className={cn${objectName}('${elem}'/* , { mode } */)}>
        ${objectName}
      </div>
    );
  }/*}}}*/

  // Private methods & handlers...

  // /** onWindowResize ** {{{ Window resize handler
  //  */
  // private onWindowResize = (e: any) => {
  //   this.updateDimensions();
  // }/*}}}*/

}

// Export class...
export default ${objectName};
// // Mods...
// export default compose.apply(null, [
//   ${objectName}Mod1,
//   ${objectName}Mod2Val,
// ])(${objectName});
`;/* ...Content }}}*/
};/*}}}*/

/** elemModTmpl ** {{{
 */
const elemModTmpl = (block, elem, mod) => {
  const { name: modName, val: modVal } = mod;
  const modValue = utils.toModValue(modVal);
  const modValType = (modValue === true) ? 'boolean' : 'string';
  const header = utils.getHeader({ block, elem, mod });
  const parentObjectName = utils.getObjectName({ block, elem });
  const objectName = utils.getObjectName({ block, elem, mod });
  const entityName = utils.getEntityName({ block, elem, mod });
  // const blockElemName = block + utils.capitalize(elem);
  // const blockElemModName = blockElemName + utils.capitalize(modName) + utils.capitalize(utils.getModValString(modVal));
/** Content... {{{ elemModTmpl */
return `${header}

import * as React from 'react';
// import { Registry, withRegistry, RegistryConsumer } from '@bem-react/di';
import { cn } from '@bem-react/classname';
import { withBemMod } from '@bem-react/core';

// import AppStore from 'lib/flux/AppStore';

import { I${parentObjectName}Props } from '../${block}-${elem}';

// NOTE: Import own styles before mods (if any)!
// import './${entityName}.css';

const cn${block} = cn('${block}');

export interface I${objectName}Props /* extends I${parentObjectName}Props */ {
  ${modName}?: ${modValType};
}

const _mod: any = (${block}: React.ComponentType<I${parentObjectName}Props>, props: I${parentObjectName}Props) => {
  // const { children, ...propsWithoutChildren } = props;
  return (
    <${block} {...props}>
      ${entityName}
    </${block}>
  );
};
export const ${objectName} = withBemMod<I${parentObjectName}Props>(cn${block}(), { ${modName}: ${modValue} }, _mod);
`;/* ...Content }}}*/
};/*}}}*/

/** blockTmpl ** {{{
 */
const blockTmpl = (block) => {
  const header = utils.getHeader({ block });
  const entityName = utils.getEntityName({ block });
  const objectName = utils.getObjectName({ block });
  /** Content... {{{ blockTmpl */
  return `${header}

import * as React from 'react';
// import { Registry, withRegistry, RegistryConsumer } from '@bem-react/di';
import { cn } from '@bem-react/classname';

// import AppStore from 'lib/flux/AppStore';

// // Mods support...
// import { compose, IClassNameProps } from '@bem-react/core';

// NOTE: Import own styles before mods (if any)!
// import './${entityName}.css';

// Elems import...
// import ${objectName}Loader from './Loader/${entityName}-Loader';

// // Mods import...
// import { ${objectName}Mod1, I${objectName}ReadyProps } from './_ready/${entityName}_mod1';
// import { ${objectName}Mod2Val, I${objectName}Mod2ValProps } from './_mode/${entityName}_mod2_val';

// Classname
const cn${objectName} = cn('${block}');

// // Import resources...
// const itemSvg = require('./item.svg');

// Props definitions...
export interface I${objectName}Props {
  // Place props definitions here...
  // mode?: string;
}
// // Mods props definitions...
// export interface I${objectName}Props extends
// I${objectName}Mod2ValProps,
// I${objectName}ReadyProps,
// IClassNameProps {
//   // children?: React.ReactNode;
//   // Place props definitions here...
// }

// State definitions...
export interface I${objectName}State {
  // Place state definitions here...
}

// Class prototype...
class ${objectName} extends React.Component<I${objectName}Props, I${objectName}State> {

  public block = '${block}';

  // Properties...

  // // Window resize callback binding sample (if used)
  // private _onWindowResize: (e: any) => void;

  // Lifecycle...

  // /** constructor ** {{{ */
  // constructor(props: I${objectName}Props) {
  //   super(props);
  //   this.state = {
  //   };
  //   // // Make handler binding (if used)
  //   // this._onWindowResize = this.onWindowResize.bind(this);
  // }/*}}}*/
  // /** componentDidMount ** {{{ */
  // public componentDidMount() {
  //   // window.addEventListener('resize', this._onWindowResize);
  // }/*}}}*/
  // /** componentWillUnmount ** {{{ */
  // public componentWillUnmount() {
  //   // window.removeEventListener('resize', this._onWindowResize);
  // }/*}}}*/
  // /** shouldComponentUpdate ** {{{ */
  // public shouldComponentUpdate(nextProps: I${objectName}Props, nextState: I${objectName}State) {
  //   const currProps = this.props;
  //   const currState = this.state;
  //   return false;
  // }/*}}}*/

  /** render ** {{{ */
  public render() {
    // const { mode } = this.props;
    return (
      <div className={cn${objectName}(/* { mode } */)}>
        ${objectName}
      </div>
    );
  }/*}}}*/

  // Private methods & handlers...

  // /** onWindowResize ** {{{ Window resize handler
  //  */
  // private onWindowResize = (e: any) => {
  //   this.updateDimensions();
  // }/*}}}*/

}

// Export class...
export default ${objectName};
// // Mods...
// export default compose.apply(null, [
//   ${objectName}Mod1,
//   ${objectName}Mod2Val,
// ])(${objectName});
`;/* ...Content }}}*/
};/*}}}*/

/** blockModTmpl ** {{{
 */
const blockModTmpl = (block, mod) => {
  const { name: modName, val: modVal } = mod;
  const modValue = utils.toModValue(modVal);
  const modValType = (modValue === true) ? 'boolean' : 'string';
  const header = utils.getHeader({ block, mod });
  // const parentObjectName = utils.getObjectName({ block });
  const objectName = utils.getObjectName({ block, mod });
  const entityName = utils.getEntityName({ block, mod });
/** Content... {{{ blockModTmpl */
return `${header}

import * as React from 'react';
// import { Registry, withRegistry, RegistryConsumer } from '@bem-react/di';
import { cn } from '@bem-react/classname';
import { withBemMod } from '@bem-react/core';

// import AppStore from 'lib/flux/AppStore';

import { I${block}Props } from '../${block}';

// NOTE: Import own styles before mods (if any)!
// import './${entityName}.css';

const cn${block} = cn('${block}');

export interface I${objectName}Props /* extends I${block}Props */ {
  ${modName}?: ${modValType};
}

const _mod: any = (${block}: React.ComponentType<I${block}Props>, props: I${block}Props) => {
  // const { children, ...propsWithoutChildren } = props;
  return (
    <${block} {...props}>
      ${entityName}
    </${block}>
  );
};
export const ${objectName} = withBemMod<I${block}Props>(cn${block}(), { ${modName}: ${modValue} }, _mod);
`;/* ...Content }}}*/
}/*}}}*/

/** module.exports ** {{{
 */
module.exports = ({ block, elem, mod={} }) => {

  const { name: modName } = mod;

  // TODO: elemModTmpl?
  if (block && elem && modName) {
    return elemModTmpl(block, elem, mod);
  }
  else if (block && elem) {
    return elemTmpl(block, elem);
  }
  else if (block && modName) {
    return blockModTmpl(block, mod);
  }
  else if (block) {
    return blockTmpl(block);
  }

}/*}}}*/

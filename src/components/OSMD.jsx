import React, { Component } from 'react';
import { OpenSheetMusicDisplay as OSMD } from 'opensheetmusicdisplay';

class SheetMusic extends Component {
    constructor(props) {
      super(props);
      this.state = { dataReady: false };
      this.osmd = undefined;
      this.divRef = React.createRef();
    }
  
    setupOsmd() {
      const options = {
        autoResize: true,
        drawTitle: false,
      }
      
      this.osmd = new OSMD(this.divRef.current, options);
      this.osmd.load(this.props.file).then(() => this.osmd.render());
    }

    resize() {
       if (this.osmd !== undefined) 
          // Force rerendering of music sheet when window size changes.
          setTimeout(() => {this.forceUpdate()}, 0); 
     }

     componentWillUnmount() {
         window.removeEventListener('resize', () => this.resize())
     }

     componentDidUpdate(prevProps) {

         if (prevProps.file !== null && prevProps.file !== undefined && prevProps.file === this.props.file)
             return;

         if (this.props.drawTitle !== prevProps.drawTitle || prevProps.autoResize !== props.autoResize ) 
            // If any option has changed then we have to recreate our osmd object.
            this.setupOsmd();
         else 
             // If only file has changed then we can just load and render the new file.
             this.osmd.load(this.props.file).then(() => this.osmd.render());
         
         window.addEventListener('resize', () => this.resize())
     }

    componentDidMount() {
      this.setupOsmd();
    }
  
    render() {
      return (<div ref={this.divRef} />);
    }
}

export default SheetMusic;


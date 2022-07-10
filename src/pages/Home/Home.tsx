import React, { useState } from 'react';

import { useGeneration } from '../../hooks/useGeneration';

import withStatus from '../../helpers/hocs/withStatus';

import { Generation } from '../../interfaces/Generation';

import { GenerationSection, Hero } from '../../components';


function Home(): JSX.Element {
    const [generationId, setGenerationId] = useState(1);

    const {
        body: generation,
        error,
        status
    } = useGeneration(generationId);

    const GenerationSectionWithStatus = withStatus<{ generation: Generation }>(GenerationSection);

    return (
        <React.Fragment>
            <Hero />
            <GenerationSectionWithStatus
                error={error}
                status={status}
                {...{ generation }}
            />
        </React.Fragment>
    );
}


export default Home;
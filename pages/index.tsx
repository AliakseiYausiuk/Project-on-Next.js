import React from "react";
import { Button, P } from "../components";
import { Htag } from "../components/Htag/Htag";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Text</Htag>
      <Button appearance='primary' arrow="right">Кнопка</Button>
      <Button appearance='ghost' arrow="down">Кнопка</Button>
      <P size="s">
        small
      </P>
      <P>
        medium
      </P>
      <P size="l">
        L-size
      </P>
      </>
  );
}

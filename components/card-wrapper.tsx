import { BackButton } from "./form/back-button";
import { Header } from "./form/header";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

interface CardWrapperProps {
  children: React.ReactNode;
  headerTitle: string;
  headerLabel: string;
  backButtonlabel: string;
  backButtonHref: string;
}

export const CardWrapper = ({
  backButtonHref,
  backButtonlabel,
  children,
  headerLabel,
  headerTitle,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header title={headerTitle} label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonlabel} />
      </CardFooter>
    </Card>
  );
};

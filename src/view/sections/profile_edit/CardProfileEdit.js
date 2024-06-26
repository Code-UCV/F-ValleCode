import { Label } from "../../../components/ui/label";
import { Card, CardContent, CardHeader } from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";
import { useEffect, useState } from "react";
import { PerfilRender } from "../../../components/profile_editor/Perfil";
import { ToggleGroup, ToggleGroupItem } from "../../../components/ui/toggle-group";
import { AccountRender } from "../../../components/profile_editor/Account";
import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";

export function CardProfileEdit() {
    const [render, setRender] = useState(<PerfilRender />);
    const [defaultToggle, setDefaultToggle] = useState("perfil");

    function handleDefaultToggle(value) {
        if (value === "perfil") {
            setRender(<PerfilRender />)
        } else if (value === "account") {
            setRender(<AccountRender />)
        }
    }

    useEffect(() => {
        handleDefaultToggle(defaultToggle);
    }, [defaultToggle])

    return (
        <>
            <Card className="shadow-inner">
                <CardHeader className="grid grid-cols-2">
                    <div className="grid grid-cols-1 gap-3">
                        <Label className="text-3xl">
                            Configuración
                        </Label>
                        <Label className="text-sm">
                            Administra tus datos a tu preferencia.
                        </Label>
                    </div>
                    <div className="flex justify-end">
                        <Link to={`/profile/${localStorage.getItem('usernameFromURL')}`}>
                            <Button>
                                <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        clipRule="evenodd">
                                    </path>
                                </svg>
                            </Button>
                        </Link>
                    </div>
                </CardHeader>
                <Separator />
                <CardContent className="grid grid-cols-[0.5fr_2fr] pt-5">
                    <div className="grid grid-cols-1 items-start">
                        <ToggleGroup
                            value={defaultToggle}
                            onValueChange={(value) => setDefaultToggle(value)}
                            type="single"
                            className="flex flex-col gap-2 p-5">
                            <ToggleGroupItem
                                value="perfil"
                                aria-label="Toggle perfil"
                                className="w-full">
                                <Label>Perfil</Label>
                            </ToggleGroupItem>
                            <ToggleGroupItem
                                value="account"
                                aria-label="Toggle account"
                                className="w-full pointer-events-none opacity-50">
                                <Label >Cuenta</Label>
                            </ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                    <div>
                        {render}
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
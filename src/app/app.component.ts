import { Router } from "@angular/router";
import {
    Component,
    ElementRef,
    OnInit,
    ViewChild
} from "@angular/core";

import { Network } from "src/shared/type";
import { BlockchainNetworks, Networks } from "src/shared/share";

@Component({
    selector: "app-component",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
    @ViewChild("themeSwitch", { read: ElementRef }) themeElement:
        | ElementRef
        | undefined;

    selected: number = BlockchainNetworks.Sepolia;
    toggle: boolean = false;
    networks: Network[] = Networks;
    blockChainNetworks = BlockchainNetworks;

    constructor(private router: Router) {}

    ngOnInit(): void {}

    home() {
        this.router.navigateByUrl("/");
    }
}

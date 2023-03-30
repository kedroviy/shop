/**
 * Shallow Test
 */
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';

import { AppComponent } from './app.component';

import { RouterLinkStubDirective } from './testing-helpers';

let fixture: ComponentFixture<AppComponent>;
let links: RouterLinkStubDirective[];
let linkDes: DebugElement[];

describe('AppComponent (Shallow)', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent, RouterLinkStubDirective],

            providers: [
                provideMockStore({})
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(AppComponent);

        fixture.detectChanges();

        linkDes = fixture.debugElement.queryAll(
            By.directive(RouterLinkStubDirective)
        );

        links = linkDes.map(
            d => d.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective
        );
    });


    beforeEach(() => { });

    it('can get RouterLinks from template', () => {
        expect(links.length).toBe(2, 'should have 2 links');
        expect(links[0].linkParams).toBe(
            '/products',
            '1st link should go to Products'
        );
        expect(links[1].linkParams).toBe('/cart', '2nd link should go to cart');
    });

    it('can click Products link in template', () => {
        const productLinkDe = linkDes[0];
        const productLink = links[0];

        expect(productLink.navigatedTo).toBeNull(
            'link should not have navigated yet'
        );

        productLinkDe.triggerEventHandler('click', null);
        fixture.detectChanges();

        expect(productLink.navigatedTo).toBe('/products');
    });
});
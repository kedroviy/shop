import { ChangeDetectionStrategy, Component, Inject, OnInit, Optional } from '@angular/core';
import { ConfigModel } from 'src/app/core/models/core.models';
import { ConfigOptionsService } from 'src/app/core/services/config-options.service';

import { Constants, constantsService } from 'src/app/core/services/constants.service';
import { generatedString, GeneratorService } from 'src/app/core/services/generator';
import { GeneratorFactory } from 'src/app/core/services/generator.factory';
import { LocalStorage, LocalStorageService } from 'src/app/core/services/local-storage.service';

import { ISimpleInterface, Category } from './FirstModel.models';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  providers: [
    GeneratorService,
    { provide: Constants, useValue: constantsService },
    { provide: generatedString, useFactory: GeneratorFactory(10), deps: [GeneratorService] },
    { provide: LocalStorageService, useValue: LocalStorage }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FirstComponent implements OnInit {
  isShowFirstComponent: boolean = false;
  name: string = 'name';
  description: string = 'description';

  data: ISimpleInterface[] = [{
    price: 5,
    category: Category.food,
    isAvailable: false,
  }]

  constructor(
    @Optional() public configService: ConfigOptionsService,
    @Optional() @Inject(Constants) public info: ConfigModel,
    @Optional() @Inject(generatedString) public generator: string,
    @Optional() public generatorService: GeneratorService,
    @Optional() @Inject(LocalStorage) public localStorageService: LocalStorageService
  ) {

  }

  ngOnInit(): void {

  }

}

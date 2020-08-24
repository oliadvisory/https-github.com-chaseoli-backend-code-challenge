import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    AccordionModule,
    BreadcrumbModule,
    ButtonModule,
    CheckboxModule,
    CodeSnippetModule,
    ComboBoxModule,
    ContentSwitcherModule,
    DatePickerModule,
    DialogModule,
    DropdownModule,
    ExperimentalModule,
    FileUploaderModule,
    GridModule,
    I18nModule,
    InlineLoadingModule,
    InputModule,
    LinkModule,
    ListModule,
    LoadingModule,
    ModalModule,
    NotificationModule,
    NotificationService,
    NumberModule,
    PaginationModule,
    PlaceholderModule,
    ProgressIndicatorModule,
    RadioModule,
    SearchModule,
    SelectModule,
    SkeletonModule,
    SliderModule,
    StructuredListModule,
    TableModule,
    TabsModule,
    TagModule,
    TilesModule,
    TimePickerModule,
    TimePickerSelectModule,
    ToggleModule,
    UIShellModule,
    ModalService
} from 'carbon-components-angular';
import { CustomCarbonIconModule } from './custom-carbon-angular-icons.module';

@NgModule({
    imports: [
        CommonModule,
        CustomCarbonIconModule,
        FlexLayoutModule,
        AccordionModule,
        BreadcrumbModule,
        ButtonModule,
        CheckboxModule,
        CodeSnippetModule,
        ComboBoxModule,
        ContentSwitcherModule,
        DatePickerModule,
        DialogModule,
        DropdownModule,
        ExperimentalModule,
        FileUploaderModule,
        GridModule,
        I18nModule,
        InlineLoadingModule,
        InputModule,
        LinkModule,
        ListModule,
        LoadingModule,
        ModalModule,
        NotificationModule,
        NumberModule,
        PaginationModule,
        PlaceholderModule,
        ProgressIndicatorModule,
        RadioModule,
        SearchModule,
        SelectModule,
        SkeletonModule,
        SliderModule,
        StructuredListModule,
        TableModule,
        TabsModule,
        TagModule,
        TilesModule,
        TimePickerModule,
        TimePickerSelectModule,
        ToggleModule,
        UIShellModule
    ],
    providers: [NotificationService, ModalService],
    declarations: [],
    exports: [
        CommonModule,
        CustomCarbonIconModule,
        FlexLayoutModule,
        AccordionModule,
        BreadcrumbModule,
        ButtonModule,
        CheckboxModule,
        CodeSnippetModule,
        ComboBoxModule,
        ContentSwitcherModule,
        DatePickerModule,
        DialogModule,
        DropdownModule,
        ExperimentalModule,
        FileUploaderModule,
        GridModule,
        I18nModule,
        InlineLoadingModule,
        InputModule,
        LinkModule,
        ListModule,
        LoadingModule,
        ModalModule,
        NotificationModule,
        NumberModule,
        PaginationModule,
        PlaceholderModule,
        ProgressIndicatorModule,
        RadioModule,
        SearchModule,
        SelectModule,
        SkeletonModule,
        SliderModule,
        StructuredListModule,
        TableModule,
        TabsModule,
        TagModule,
        TilesModule,
        TimePickerModule,
        TimePickerSelectModule,
        ToggleModule,
        UIShellModule
    ]
})
export class CustomCarbonModule { }


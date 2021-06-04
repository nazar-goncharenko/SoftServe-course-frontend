import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SurveyService} from '@services/survey.service';
import {CheckboxService} from '@services/checkbox.service';
import {CheckBox} from '@shared/interfaces/checkBox';
import {Survey} from '@shared/interfaces/survey';
import {FormControl, FormGroup} from '@angular/forms';

const tableTemplate: Survey[] = [
    {id: 0, question: '', status: 'Hydrogen', isOpen: true, closed_day: '', responses_count: 0},
];

@Component({
    selector: 'app-survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
    userId: number;
    public dataSource: Survey[];
    public displayedColumnsOpen: string[];
    public displayedColumnsClose: string[];
    updateSurveyForm: FormGroup;
    openSurveys;
    closedSurveys;
    selectedSurveyId: number;
    selectedSurveyQuestion: string;
    checkBoxes;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private surveyService: SurveyService,
                private checkBoxService: CheckboxService
    ) {
    }

    private createForm(): void {
        this.updateSurveyForm = new FormGroup({
            id: new FormControl(this.selectedSurveyId),
            question: new FormControl(null),
            isOpen: new FormControl(null)
        });
    }

    getSelectedSurveyId(id, question): void {
        this.selectedSurveyId = id;
        this.selectedSurveyQuestion = question;
        this.getCheckBoxOfSurvey();
    }

    getCheckBoxOfSurvey(): void {
        this.checkBoxService.findAllBySurveyId(this.userId, this.selectedSurveyId)
            .subscribe((data: CheckBox[]) => {
                console.log(data);
                this.checkBoxes = data;
            });
    }

    closeSurvey(): void {
        this.surveyService.closeSurvey(this.userId, this.selectedSurveyId);
        this.router.navigate([`adm/surveys`])
            .then(() => {
                window.location.reload();
            });
    }

    changeStatusSurvey(surveyId: number): void {
        this.surveyService.changeStatusSurvey(this.userId, surveyId);
    }

    deleteSurvey(): void {
        console.log('deleteSurvey surv comp');
        this.surveyService.deleteSurvey(this.userId, this.selectedSurveyId);
        console.log('deleteSurvey surv comp 2 ');
        // this.router.navigate([`adm/surveys`])
        //    .then(() => {
          //      window.location.reload();
       //     });
    }

    ngOnInit(): void {
        this.userId = 1; // todo: get from auth

        this.surveyService.findAllOpenAdmin(this.userId)
            .subscribe((data: Survey[]) => {
                console.log(data);
                this.openSurveys = data;
            });

        this.surveyService.findAllClosedAdmin(this.userId)
            .subscribe((data: Survey[]) => {
                console.log(data);
                this.closedSurveys = data;
            });

        this.createForm();
        this.displayedColumnsOpen = ['question', 'status', 'responses_count'];
        this.displayedColumnsClose = ['question', 'closed_day', 'responses_count'];
        this.dataSource = tableTemplate;
    }
}

import { TemplateActionTypes } from './template.types';

export const getTemplates = () => async (dispatch, getState) => {
  try {
    console.log(getState());
    const url =
      'https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates';

    const request = await fetch(url);
    const response = await request.json();
    // const filteredTemplates = response.slice(0, 15);

    dispatch({
      type: TemplateActionTypes.GET_TEMPLATES,
      payload: response,
    });
  } catch (error) {
    console.log(error);
  }
};

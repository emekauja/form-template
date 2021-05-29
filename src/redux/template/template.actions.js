import { TemplateActionTypes } from './template.types';

export const getTemplates = () => async (dispatch) => {
  try {
    const url =
      'https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates';

    const request = await fetch(url);
    const response = await request.json();

    dispatch({
      type: TemplateActionTypes.GET_TEMPLATES,
      payload: response.slice(0, 15),
    });
  } catch (error) {
    console.log(error);
  }
};
